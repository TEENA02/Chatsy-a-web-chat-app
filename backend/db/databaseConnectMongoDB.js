import mongoose from "mongoose";

const databaseConnectMongoDB =async () => {
 try {
  //  console.log(process.env.MONGO_DB_URI);
    await mongoose.connect(process.env.MONGO_DB_URI);

    console.log("database connected")
 } catch (error) {
    console.log("error connecting to MongoDB",error.message)
 }
}
export default databaseConnectMongoDB;