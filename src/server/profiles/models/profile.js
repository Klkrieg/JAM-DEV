import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
  },
  zipCode: {
    type: String,
    required: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
});

export const Profile =
  mongoose.models.Profile || mongoose.model('Profile', profileSchema);
