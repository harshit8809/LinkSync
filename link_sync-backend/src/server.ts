// import express from 'express';
// import { connectDB } from './config/db.js';
// import dotenv from 'dotenv';

// const app = express();

// dotenv.config();
// connectDB()

// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// })

// app.listen(3001, () => {
//     console.log('Server is running on http://localhost:3001');
// })



// import dotenv from "dotenv";
// import app from "./app.js";
// import { connectDB } from "./config/db.js";

// dotenv.config();

// connectDB();

// const PORT = process.env.PORT || 3001;

// app.listen(PORT, () => {
//     console.log(`Server running on ${PORT}`);
// });


import dotenv from "dotenv";

dotenv.config();

import app from "./app.js";
import { connectDB } from "./config/db.js";

connectDB();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});