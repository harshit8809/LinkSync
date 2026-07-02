import jwt from "jsonwebtoken";
import type { Request, Response, NextFunction } from "express";
import { ACCESS_TOKEN_COOKIE } from "../utils/cookieOptions.js";

export interface AuthRequest extends Request {
    userId?: string;
}

export const authenticate = (
    req: AuthRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        const token = req.cookies?.[ACCESS_TOKEN_COOKIE];

        if (!token) {
            return res.status(401).json({
                message: "Not authenticated",
            });
        }

        const secret = process.env.JWT_SECRET;

        if (!secret) {
            return res.status(500).json({
                message: "JWT_SECRET is not configured",
            });
        }

        const decoded = jwt.verify(token, secret) as {
            userId: string;
        };

        req.userId = decoded.userId;
        next();
    } catch {
        return res.status(401).json({
            message: "Invalid or expired token",
        });
    }
};
