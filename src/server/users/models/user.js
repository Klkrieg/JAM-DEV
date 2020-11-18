import { model, models, Schema } from 'mongoose';

import { auditingMixin } from '../../utils/schemaMixins';

const userSchema = new Schema({
  ...auditingMixin,
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
});

export const User = models.User || model('User', userSchema);
