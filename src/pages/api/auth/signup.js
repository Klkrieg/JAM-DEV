import { createHandler } from '../../../server/utils/createHandler';
import { UserService } from '../../../server/users/services/userService';

export default createHandler({
  POST: {
    allowUnauthenticated: true,
    handle: async ({ req, res }) => {
      const userService = new UserService();
      const user = await userService.signUp(req.body.email, req.body.password);
      res.status(201).json(user);
    },
  },
});
