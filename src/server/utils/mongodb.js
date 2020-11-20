import mongoose from 'mongoose';

const DB_CONN_STRING = process.env.DB_CONN_STRING;

if (!DB_CONN_STRING) {
  throw new Error('No DB_CONN_STRING found');
}

export class MongoDb {
  static isConnected = false;

  static async connect() {
    if (MongoDb.isConnected) {
      return;
    }

    await mongoose.connect(DB_CONN_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    MongoDb.isConnected = true;
  }

  static async disconnect() {
    if (MongoDb.isConnected) {
      await mongoose.disconnect();
    }
  }
}
