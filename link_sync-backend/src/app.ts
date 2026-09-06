import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import linkRoutes from "./routes/link.routes.js";

const app = express();
app.use(cookieParser());

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
app.use("/api/links", linkRoutes);

export default app;