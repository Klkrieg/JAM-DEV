import bcrypt from 'bcrypt';

import { User } from '../models/user';

export class UserService {
  async authenticate(email, password) {
    const user = await User.findOne({
      email,
    });

    if (!user) {
      return null;
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    return isPasswordCorrect ? { email: user.email } : null;
  }

  async signUp(email, password) {
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const user = await User.create({
      email,
      password: passwordHash,
    });

    const userObj = user.toObject();
    delete userObj.password;
    return userObj;
  }
}
