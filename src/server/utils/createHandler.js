import { HttpError } from './httpError';
import { MongoDb } from './mongodb';

export function createHandler(config) {
  return async (req, res) => {
    const configForMethod = config[req.method];

    if (!configForMethod) {
      res.setHeader('Allow', Object.keys(config));
      res.status(405).end(`Method ${req.method} Not Allowed`);
      return;
    }

    await MongoDb.connect();

    const context = {
      req,
      res,
    };

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
