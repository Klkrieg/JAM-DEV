import { createHandler } from '../../../server/utils/createHandler';
import { ProfileService } from '../../../server/profiles/services/profileService';

export default createHandler({
  POST: {
    handle: async ({ req, res, user }) => {
      const profileService = new ProfileService(user);
      const profile = await profileService.createProfile(req.body);
      res.status(201).json(profile);
    },
  },
});
