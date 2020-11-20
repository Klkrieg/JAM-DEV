import { getSession } from 'next-auth/client';

import { HttpError } from './httpError';
import { MongoDb } from './mongodb';

async function authenticate(req) {
  const session = await getSession({ req });
  if (!session) {
    console.log('No user signed in');
    return null;
  }

  return session.user;
}

export function createHandler(config) {
  return async (req, res) => {
    const configForMethod = config[req.method];

    if (!configForMethod) {
      res.setHeader('Allow', Object.keys(config));
      res.status(405).end(`Method ${req.method} Not Allowed`);
      return;
    }

    const context = {
      req,
      res,
    };

    if (!configForMethod.allowUnauthenticated) {
      const user = await authenticate(req);
      if (user) {
        context.user = user;
      } else {
        res.status(401).json({
          message: 'Unauthorized',
        });
        return;
      }
    }

    await MongoDb.connect();

    try {
      await configForMethod.handle(context);
    } catch (e) {
      if (e instanceof HttpError) {
        res.status(e.statusCode).json({
          message: e.message,
        });
      } else {
        res.status(500).json({
          message: e.message,
        });
      }
    }
  };
}
