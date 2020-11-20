import mongoose from 'mongoose';

import { auditingMixin } from '../../utils/schemaMixins';
import { Profile } from './profile';

const organizationProfileSchema = mongoose.Schema({
  ...auditingMixin,
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

export const OrganizationProfile =
  mongoose.models.OrganizationProfile ||
  Profile.discriminator('OrganizationProfile', organizationProfileSchema);
