import mongoose from 'mongoose';

import { auditingMixin } from '../../utils/schemaMixins';

const resourceSchema = new mongoose.Schema({
  ...auditingMixin,
  organization: {
    type: String,
    required: true,
    trim: true,
  },
  url: {
    type: String,
    required: false,
    trim: true,
  },
  status: {
    type: String,
    required: true,
    trim: true,
  },
  estimatedAmount: {
    type: Number,
    required: true,
    default: 0.0,
  },
  amountDetail: {
    type: String,
    required: true,
    trim: true,
  },
  yearsInIndustry: {
    type: Number,
    required: true,
    min: 0,
    default: 0,
  },
  industryRoles: {
    type: [String],
    required: true,
  },
  requiredProofs: {
    type: [String],
    required: true,
  },
  eligibilities: {
    type: [String],
    required: true,
  },
});

export const Resource =
  mongoose.models && mongoose.models.Resource
    ? mongoose.models.Resource
    : mongoose.model('Resource', resourceSchema);
