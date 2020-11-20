import { expect } from 'chai';

import { Resource } from '../../src/server/resources/models/resource';
import { ResourceService } from '../../src/server/resources/services/resourceService';

describe(ResourceService.name, () => {
  before(async () => {
    const seedData = require('../seed/test-resources.json');
    await Resource.insertMany(seedData);
  });

  after(async () => {
    await Resource.deleteMany({});
  });

  describe('filtering', () => {
    it('finds all when no filters given', async () => {
      const resourceService = new ResourceService();
      const resources = await resourceService.searchResources({});
      expect(resources.length).to.equal(3);
    });

    it('can find by provided proofs', async () => {
      const resourceService = new ResourceService();
      const resources = await resourceService.searchResources({
        proofs: ['financial-impact', 'employment'],
      });

      expect(resources.length).to.equal(2);
    });

    it('can find by industry roles', async () => {
      const resourceService = new ResourceService();
      const resources = await resourceService.searchResources({
        roles: ['musician'],
      });

      expect(resources.length).to.equal(2);
    });

    it('can find by years of experience', async () => {
      const resourceService = new ResourceService();
      const resources = await resourceService.searchResources({
        years: 2,
      });

      expect(resources.length).to.equal(2);
    });

    it('can find by statuses', async () => {
      const resourceService = new ResourceService();
      const resources = await resourceService.searchResources({
        statuses: ['open'],
      });

      expect(resources.length).to.equal(1);
    });
  });

  describe('sorting', () => {
    it('defaults to sorting by organization name (ascending)', async () => {
      const resourceService = new ResourceService();
      const resources = await resourceService.searchResources({});

      expect(resources[0].organization).to.equal('ACM Lifting Lives');
      expect(resources[1].organization).to.equal(
        'AFM - American Federation Of Musicians',
      );
      expect(resources[2].organization).to.equal('The Actors Fund');
    });

    it('can sort by organization name (descending)', async () => {
      const resourceService = new ResourceService();
      const resources = await resourceService.searchResources({
        sortBy: 'organization',
        sortDirection: 'desc',
      });

      expect(resources[0].organization).to.equal('The Actors Fund');
      expect(resources[1].organization).to.equal(
        'AFM - American Federation Of Musicians',
      );
      expect(resources[2].organization).to.equal('ACM Lifting Lives');
    });

    it('can sort by amount (descending)', async () => {
      const resourceService = new ResourceService();
      const resources = await resourceService.searchResources({
        sortBy: 'amount',
        sortDirection: 'desc',
      });

      expect(resources[0].organization).to.equal(
        'AFM - American Federation Of Musicians',
      );
      expect(resources[1].organization).to.equal('ACM Lifting Lives');
      expect(resources[2].organization).to.equal('The Actors Fund');
    });
  });
});
