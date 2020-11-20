import mongoose from 'mongoose';
import { expect } from 'chai';

import { createTestUser } from '../utils/createTestUser';
import { HttpError } from '../../src/server/utils/httpError';
import { Profile } from '../../src/server/profiles/models/profile';
import { ProfileService } from '../../src/server/profiles/services/profileService';
import { UserProfile } from '../../src/server/profiles/models/userProfile';

const testUser = createTestUser();

describe(ProfileService.name, () => {
  afterEach(async () => {
    await Profile.deleteMany({});
  });

  describe('get profile by ID', () => {
    it('can get own profile', async () => {
      const profile1 = await UserProfile.create({
        email: testUser.email,
        firstName: 'Caesar',
        lastName: 'Chavez',
        dateOfBirth: '1950-05-01T00:00:00.000Z',
        zipCode: '12345',
        phoneNumber: '123-456-7890',
      });

      const profileService = new ProfileService(testUser);
      const foundProfile = await profileService.getProfileById(profile1._id);

      expect(foundProfile._id.toString()).to.equal(profile1._id.toString());
    });

    it('can get allowed fields from other profiles', async () => {
      const profile1 = await UserProfile.create({
        email: 'eb@example.com',
        firstName: 'Ed',
        lastName: 'Bluestein',
        dateOfBirth: '1950-05-01T00:00:00.000Z',
        zipCode: '12345',
        phoneNumber: '123-456-7890',
      });

      const profileService = new ProfileService(testUser);
      const foundProfile = await profileService.getProfileById(profile1._id);

      expect(foundProfile._id.toString()).to.equal(profile1._id.toString());
      expect(foundProfile).not.to.have.property('phoneNumber');
    });
  });

  describe('create profile', () => {
    it('can create user profile', async () => {
      const profileService = new ProfileService(testUser);
      const profile = await profileService.createProfile({
        type: 'user',
        firstName: 'Willie',
        lastName: 'Nelson',
        dateOfBirth: '1950-05-01T00:00:00.000Z',
        zipCode: '12345',
        phoneNumber: '123-456-7890',
      });

      expect(profile).to.include({
        __t: 'UserProfile',
        email: testUser.email,
        firstName: 'Willie',
        lastName: 'Nelson',
        zipCode: '12345',
        phoneNumber: '123-456-7890',
      });
    });

    it('can create band profile', async () => {
      const profileService = new ProfileService(testUser);
      const profile = await profileService.createProfile({
        type: 'band',
        name: 'Green Day',
        zipCode: '12345',
        phoneNumber: '123-456-7890',
      });

      expect(profile).to.include({
        __t: 'BandProfile',
        email: testUser.email,
        name: 'Green Day',
        zipCode: '12345',
        phoneNumber: '123-456-7890',
      });
    });

    it('can create organization profile', async () => {
      const profileService = new ProfileService(testUser);
      const profile = await profileService.createProfile({
        type: 'organization',
        name: 'Austin City Limits',
        zipCode: '12345',
        phoneNumber: '123-456-7890',
      });

      expect(profile).to.include({
        __t: 'OrganizationProfile',
        email: testUser.email,
        name: 'Austin City Limits',
        zipCode: '12345',
        phoneNumber: '123-456-7890',
      });
    });

    it('can create multiple band profiles', async () => {
      const profileService = new ProfileService(testUser);
      await profileService.createProfile({
        type: 'band',
        name: 'Fall Out Boy',
        zipCode: '12345',
        phoneNumber: '123-456-7890',
      });

      await profileService.createProfile({
        type: 'band',
        name: 'Panic! At the Disco',
        zipCode: '12345',
        phoneNumber: '123-456-7890',
      });
    });

    it('cannot create profile with missing fields', async () => {
      try {
        const profileService = new ProfileService(testUser);
        await profileService.createProfile({
          type: 'user',
          firstName: 'Willie',
          dateOfBirth: '1950-05-01T00:00:00.000Z',
          zipCode: '12345',
          phoneNumber: '123-456-7890',
        });

        expect.fail('Expected create profile to throw');
      } catch (e) {
        expect(e).to.be.instanceOf(mongoose.Error.ValidationError);
      }
    });

    it('cannot create user profile if one already exists', async () => {
      const profileFields = {
        type: 'user',
        firstName: 'Willie',
        lastName: 'Nelson',
        dateOfBirth: '1950-05-01T00:00:00.000Z',
        zipCode: '12345',
        phoneNumber: '123-456-7890',
      };

      const profileService = new ProfileService(testUser);
      await profileService.createProfile(profileFields);

      try {
        await profileService.createProfile(profileFields);
        expect.fail('Expected create profile to throw');
      } catch (e) {
        expect(e).to.be.instanceOf(HttpError);
        expect(e.statusCode).to.equal(409);
      }
    });
  });

  describe('update profile', () => {
    it('can update own profile', async () => {
      const profile = await UserProfile.create({
        email: testUser.email,
        firstName: 'Caesar',
        lastName: 'Chavez',
        dateOfBirth: '1950-05-01T00:00:00.000Z',
        zipCode: '12345',
        phoneNumber: '123-456-7890',
      });

      const profileService = new ProfileService(testUser);
      const updatedProfile = await profileService.updateProfile(profile._id, {
        firstName: 'New Guy',
      });

      expect(updatedProfile).to.include({
        firstName: 'New Guy',
      });
    });

    it('cannot updated profile owned by another user', async () => {
      const profile = await UserProfile.create({
        email: 'cc@example.com',
        firstName: 'Caesar',
        lastName: 'Chavez',
        dateOfBirth: '1950-05-01T00:00:00.000Z',
        zipCode: '12345',
        phoneNumber: '123-456-7890',
      });

      const profileService = new ProfileService(testUser);

      try {
        await profileService.updateProfile(profile._id, {
          firstName: 'New Guy',
        });

        expect.fail('Expected update profile to throw');
      } catch (e) {
        expect(e).to.be.instanceOf(HttpError);
        expect(e.statusCode).to.equal(403);
      }
    });
  });

  describe('delete profile', () => {
    it('can delete own profile', async () => {
      const profile = await UserProfile.create({
        email: testUser.email,
        firstName: 'Caesar',
        lastName: 'Chavez',
        dateOfBirth: '1950-05-01T00:00:00.000Z',
        zipCode: '12345',
        phoneNumber: '123-456-7890',
      });

      const profileService = new ProfileService(testUser);
      await profileService.deleteProfile(profile._id);

      const deletedProfile = await UserProfile.findById(profile._id);
      expect(deletedProfile).to.be.null;
    });

    it('cannot delete profile owned by another user', async () => {
      const profile = await UserProfile.create({
        email: 'cc@example.com',
        firstName: 'Caesar',
        lastName: 'Chavez',
        dateOfBirth: '1950-05-01T00:00:00.000Z',
        zipCode: '12345',
        phoneNumber: '123-456-7890',
      });

      const profileService = new ProfileService(testUser);

      try {
        await profileService.deleteProfile(profile._id);
        expect.fail('Expected delete profile to throw');
      } catch (e) {
        expect(e).to.be.instanceOf(HttpError);
        expect(e.statusCode).to.equal(403);
      }
    });
  });
});
