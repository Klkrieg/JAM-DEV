import { model, models, Schema } from 'mongoose';

const userSchema = new Schema({
  email: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    trim: true,
    required: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: false,
  },
  zipcode: {
    type: String,
    trim: true,
    required: false,
  },
  birthday: {
    type: Date,
    required: false,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
  profileType: {
    type: String,
    required: false,
  },
});

const Users = models.Users || model('Users', userSchema);

export default Users;
