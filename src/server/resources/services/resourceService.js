import { Resource } from '../models/resource';

export class ResourceService {
  async searchResources(queryFields) {
    const {
      proofs,
      role,
      years = 0,
      status,
      sortBy = 'organization',
      sortDirection = 'asc',
    } = queryFields;

    const andConditions = [];

    if (proofs && proofs.length > 0) {
      const orProofs = proofs.map((proof) => ({ requiredProofs: proof }));
      andConditions.push({
        $or: [...orProofs, { requiredProofs: { $size: 0 } }],
      });
    }

    if (role) {
      andConditions.push({
        $or: [{ industryRoles: role }, { industryRoles: { $size: 0 } }],
      });
    }

    if (years > 0) {
      andConditions.push({
        yearsInIndustry: { $lte: years },
      });
    }

    if (status && status !== 'all') {
      andConditions.push({
        status,
      });
    }

    const sortOptions = {};
    if (sortBy === 'organization') {
      sortOptions.organization = sortDirection;
    } else if (sortBy === 'amount') {
      sortOptions.estimatedAmount = sortDirection;
    }

    const query = andConditions.length > 0 ? { $and: andConditions } : {};
    return await Resource.find(query, null, { sort: sortOptions });
  }
}
