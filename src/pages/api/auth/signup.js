import { config } from '../../../config';
import { createHandler } from '../../../server/utils/createHandler';
import { HttpError } from '../../../server/utils/httpError';
import { UserService } from '../../../server/users/services/userService';

export default createHandler({
  POST: {
    allowUnauthenticated: true,
    handle: async ({ req, res }) => {
      // Disallow sign-ups in preview deployments
      if (config.isPreview) {
        throw HttpError.forbidden();
      }

      const userService = new UserService();
      const user = await userService.signUp(req.body.email, req.body.password);
      res.status(201).json(user);
    },
  },
});
