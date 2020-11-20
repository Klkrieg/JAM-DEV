import { Resource } from '../models/resource';

export class ResourceService {
  async searchResources(queryFields) {
    const {
      proofs,
      roles,
      years = 0,
      statuses,
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

    if (roles && roles.length > 0) {
      const orRoles = roles.map((role) => ({ industryRoles: role }));
      andConditions.push({
        $or: [...orRoles, { industryRoles: { $size: 0 } }],
      });
    }

    if (years > 0) {
      andConditions.push({
        yearsInIndustry: { $lte: years },
      });
    }

    if (statuses && statuses.length > 0 && !statuses.includes('all')) {
      const orStatuses = statuses.map((status) => ({ status }));
      andConditions.push({
        $or: [...orStatuses],
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
