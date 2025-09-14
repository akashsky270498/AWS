import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      dbName: "product",
      autoIndex: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      family: 4,
    });
    console.log("MongoDB connected successfully.");
  } catch (error: unknown) {
    console.log("Unable to connect MongoDB: ", error);
    process.exit(1);
  }
};

export { connectMongo };
