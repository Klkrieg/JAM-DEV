import { BandProfile } from '../models/bandProfile';
import { HttpError } from '../../utils/httpError';
import { OrganizationProfile } from '../models/organizationProfile';
import { Profile } from '../models/profile';
import { UserProfile } from '../models/userProfile';

export class ProfileService {
  constructor(user) {
    this.user = user;
  }

  async getProfileById(id) {
    const profile = await Profile.findById(id);

    // If user is owner of profile, return all fields
    if (profile.email === this.user.email) {
      return profile;
    }

    // If user is not the owner of the profile, exclude some fields
    const profileObj = profile.toObject();
    delete profileObj.phoneNumber;

    return profileObj;
  }

  async getProfilesForUser(email) {
    if (email !== this.user.email) {
      throw HttpError.forbidden();
    }

    return await Profile.find({ email });
  }

  async createProfile(profileFields) {
    const profileDocument = {
      email: this.user.email,
      ...profileFields,
    };

    switch (profileFields.type) {
      case 'user':
        return await this.createUserProfile(profileDocument);
      case 'band':
        return await BandProfile.create(profileDocument);
      case 'organization':
        return await OrganizationProfile.create(profileDocument);
      default:
        throw HttpError.badRequest(
          `Invalid profile type: ${profileFields.type}`,
        );
    }
  }

  async createUserProfile(profileDocument) {
    const existingProfile = await UserProfile.findOne({
      email: this.user.email,
    });

    if (existingProfile) {
      throw HttpError.conflict();
    }

    return await UserProfile.create(profileDocument);
  }

  async updateProfile(id, profileFields) {
    const profile = await Profile.findById(id);
    if (profile.email !== this.user.email) {
      throw new HttpError.forbidden();
    }

    let ModelClass;
    switch (profile.__t) {
      case 'BandProfile':
        ModelClass = BandProfile;
        break;
      case 'OrganizationProfile':
        ModelClass = OrganizationProfile;
        break;
      case 'UserProfile':
        ModelClass = UserProfile;
        break;
      default:
        throw new Error(`Unknown Profile type: ${profile.__t}`);
    }

    const updatedProfile = await ModelClass.findByIdAndUpdate(
      id,
      {
        $set: profileFields,
      },
      {
        new: true,
      },
    );

    return updatedProfile;
  }

  async deleteProfile(id) {
    const profile = await Profile.findById(id);
    if (profile.email !== this.user.email) {
      throw new HttpError.forbidden();
    }

    await Profile.deleteOne({ _id: id });
  }
}
