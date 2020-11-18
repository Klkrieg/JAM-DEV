import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

import { MongoDb } from '../../../server/utils/mongodb';
import { UserService } from '../../../server/users/services/userService';

const options = {
  providers: [
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
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
  ],
  database: process.env.DB_CONN_STRING,
  secret: process.env.JWT_SECRET,
  session: {
    jwt: true,
  },
};

export default (req, res) => NextAuth(req, res, options);
