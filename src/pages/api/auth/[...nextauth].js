import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

import { config } from '../../../config';
import { MongoDb } from '../../../server/utils/mongodb';
import { UserService } from '../../../server/users/services/userService';

// Allow email/password sign-in in all environments
const providers = [
  Providers.Credentials({
    name: 'email',
    credentials: {
      email: {
        label: 'Email',
        type: 'text',
      },
      password: {
        label: 'Password',
        type: 'password',
      },
    },
    authorize: async ({ email, password }) => {
      await MongoDb.connect();
      const userService = new UserService();
      return await userService.authenticate(email, password);
    },
  }),
];

// Disallow social sign-in providers in preview deploys to prevent random sign-ups
if (!config.isPreview) {
  providers.push(
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
  );
}

const options = {
  providers,
  database: process.env.DB_CONN_STRING,
  secret: process.env.JWT_SECRET,
  session: {
    jwt: true,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    signingKey: process.env.JWT_SIGNING_KEY,
  },
};

export default (req, res) => NextAuth(req, res, options);
