import { createHandler } from '../../../server/utils/createHandler';
import { ResourceService } from '../../../server/resources/services/resourceService';

export default createHandler({
  GET: {
    allowUnauthenticated: true,
    handle: async ({ req, res }) => {
      const resourceService = new ResourceService();
      const resources = await resourceService.searchResources(req.query);
      res.status(200).json(resources);
    },
  },
});
