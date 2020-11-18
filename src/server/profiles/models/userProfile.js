import mongoose from 'mongoose';

import { auditingMixin } from '../../utils/schemaMixins';
import { Profile } from './profile';

const userProfileSchema = mongoose.Schema({
  ...auditingMixin,
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  dateOfBirth: {
    type: Date,
    required: false,
  },
});

export const UserProfile =
  mongoose.models.UserProfile ||
  Profile.discriminator('UserProfile', userProfileSchema);
