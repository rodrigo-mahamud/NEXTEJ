import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
   throw new Error("Please define the MONGODB_URI environment variable inside .env");
}

interface GlobalMongo {
   conn: typeof mongoose | null;
   promise: Promise<typeof mongoose> | null;
}

const globalWithMongo = global as typeof globalThis & {
   mongoose: GlobalMongo;
};

if (!globalWithMongo.mongoose) {
   globalWithMongo.mongoose = {
      conn: null,
      promise: null,
   };
}

async function connectDB() {
   try {
      if (globalWithMongo.mongoose.conn) {
         console.log("🚀 Using existing connection");
         return globalWithMongo.mongoose.conn;
      }

      if (!globalWithMongo.mongoose.promise) {
         console.log("🔄 Creating new connection");
         globalWithMongo.mongoose.promise = mongoose.connect(MONGODB_URI);
      }

      globalWithMongo.mongoose.conn = await globalWithMongo.mongoose.promise;
      return globalWithMongo.mongoose.conn;
   } catch (error) {
      console.error("❌ Error connecting to MongoDB:", error);
      throw error;
   }
}

export default connectDB;
