import mongoose from "mongoose";

let isConnected = false; 

export const connectDB = async () => {
  if (isConnected) {
    return; 
  }

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    isConnected = true;
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error.message);
    
    throw error;
  }
};
