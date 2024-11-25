import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "travel_app",
    });
    console.log(
      `MongoDb connected Successfully ${conn.connection.host}`.cyan.underline
    );
  } catch (error) {
    console.log("Error While connecting to MongoDb".red);
    process.exit(1);
  }
};

export default connectToDb;
