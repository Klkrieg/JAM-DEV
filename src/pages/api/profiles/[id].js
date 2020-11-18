import { createHandler } from '../../../server/utils/createHandler';
import { ProfileService } from '../../../server/profiles/services/profileService';

export default createHandler({
  GET: {
    handle: async ({ req, res, user }) => {
      const profileService = new ProfileService(user);
      const profile = await profileService.getProfileById(req.query.id);
      res.status(200).json(profile);
    },
  },
  PUT: {
    handle: async ({ req, res, user }) => {
      const profileService = new ProfileService(user);
      const profile = await profileService.updateProfile(
        req.query.id,
        req.body,
      );
      res.status(200).json(profile);
    },
  },
  DELETE: {
    handle: async ({ req, res, user }) => {
      const profileService = new ProfileService(user);
      await profileService.deleteProfile(req.query.id);
      res.status(200).end();
    },
  },
});
