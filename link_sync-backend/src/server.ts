// import dotenv from "dotenv";

// dotenv.config();

// import app from "./app.js";
// import { connectDB } from "./config/db.js";

// connectDB();

// const PORT = process.env.PORT || 3003;

// app.listen(PORT, () => {
//   console.log(`Server running on ${PORT}`);
// });



import "dotenv/config";

import app from "./app.js";
import { connectDB } from "./config/db.js";

const PORT: any = process.env.PORT || 3003;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on ${PORT}`);
  });
};

startServer();