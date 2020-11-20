import { MongoDb } from '../src/server/utils/mongodb';

export async function mochaGlobalSetup() {
  await MongoDb.connect();
}

export async function mochaGlobalTeardown() {
  await MongoDb.disconnect();
}
