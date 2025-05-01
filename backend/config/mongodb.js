import mongoose from "mongoose";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true }, dbName: 'e-commerce' };

const uri = process.env.MONGODB_URI ;
async function connectDB() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("You successfully connected to MongoDB!");
  }  catch (err) {
    console.error("Error connecting to MongoDB:", err);
  } 
}


export default connectDB;