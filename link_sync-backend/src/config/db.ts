// import mongoose from "mongoose"

// export const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(process.env.MONGO_URI)
//         // console.log("mongoDb connected")
//         console.log(`MongoDB Connected: ${conn.connection.host}`);
//     } catch (e: any) {
//         console.log("error while connecting DB ->", e)
//         console.error(e.message)
//         process.exit(1)
//     }
// }



import mongoose from "mongoose";

export const connectDB = async () => {
  try {

    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is missing in .env");
    }

    const conn = await mongoose.connect(
      process.env.MONGO_URI
    );

    console.log(
      `MongoDB Connected: ${conn.connection.host}`
    );

  } catch (e: any) {

    console.log("error while connecting DB ->", e);
    console.error(e.message);
    process.exit(1);
  }
};