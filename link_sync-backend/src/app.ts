// import express from "express";
// import cors from "cors";


// const app = express();

// app.use(cors())
// app.use(express.json());

// app.get("/", (_, res) => {
//     res.send("Hello World");
// });

// export default app;

// import express from "express";
// import cors from "cors";

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// app.get("/", (_, res) => {
//   res.send("LinkSync API");
// });

// export default app;


import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";

const app = express();

const allowedOrigins = [
    "http://localhost:3000",
    "https://linksync.vercel.app",
    "https://staging.linksync.com",
];

// Middleware
// app.use(cors());
app.use(
    cors({
        origin: allowedOrigins,
        credentials: true,
    })
);
app.use(express.json());

app.use("/api/auth", authRoutes);

export default app;