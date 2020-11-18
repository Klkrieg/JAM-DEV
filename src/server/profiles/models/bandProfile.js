import mongoose from 'mongoose';

import { auditingMixin } from '../../utils/schemaMixins';
import { Profile } from './profile';

const bandProfileSchema = mongoose.Schema({
  ...auditingMixin,
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

export const BandProfile =
  mongoose.models.BandProfile ||
  Profile.discriminator('BandProfile', bandProfileSchema);
