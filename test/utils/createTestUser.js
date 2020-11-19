import faker from 'faker';

const DEFAULT_USER = {
  email: faker.internet.email(),
};

export function createTestUser(fields = {}) {
  return {
    ...DEFAULT_USER,
    ...fields,
  };
}
