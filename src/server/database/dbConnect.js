import mongoose from 'mongoose';
//import resourceSchema from "../models/resource";
//import userSchema from "../models/users";
const connection = {};
const dbConnect = async () => {
  if (connection.isConnected) {
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    //const Resource = mongoose.model("Resource", resourceSchema);
    //const Users = mongoose.model("Users", userSchema);
    connection.isConnected = db.connections[0].readyState;
    // connection.models = {
    // 	Resource,
    // 	Users,
    // };
    console.log(connection.models.Resource);
  } catch (e) {
    return 'Did not connect to Mongo';
  }
};

export default dbConnect;
