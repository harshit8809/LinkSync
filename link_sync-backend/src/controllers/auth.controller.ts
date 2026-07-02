import bcrypt from "bcryptjs";
import User from "../models/User.js";
import type { Response } from "express";
import type { AuthRequest } from "../middleware/auth.middleware.js";
import {
    clearAuthCookie,
    setAuthCookie,
    signAuthToken,
} from "../utils/cookieOptions.js";

const formatUser = (user: {
    _id: unknown;
    username: string;
    email: string;
}) => ({
    id: user._id,
    username: user.username,
    email: user.email,
});

export const signup = async (
    req: AuthRequest,
    res: Response
) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({
                message: "All fields are required",
            });
        }

        const existingUser = await User.findOne({
            email,
        });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists",
            });
        }

        const hashedPassword =
            await bcrypt.hash(password, 10);

        const user = await User.create({
            username,
            email,
            password: hashedPassword,
        });

        const token = signAuthToken(String(user._id));
        setAuthCookie(res, token);

        return res.status(201).json({
            success: true,
            user: formatUser(user),
        });
    } catch (error: unknown) {
        const message =
            error instanceof Error
                ? error.message
                : "Something went wrong";

        return res.status(500).json({
            message,
        });
    }
};

export const login = async (
    req: AuthRequest,
    res: Response
) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required",
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "Invalid credentials",
            });
        }

        const isPasswordMatched =
            await bcrypt.compare(
                password,
                user.password
            );

        if (!isPasswordMatched) {
            return res.status(400).json({
                message: "Invalid credentials",
            });
        }

        const token = signAuthToken(String(user._id));
        setAuthCookie(res, token);

        return res.status(200).json({
            success: true,
            user: formatUser(user),
        });
    } catch (error: unknown) {
        const message =
            error instanceof Error
                ? error.message
                : "Something went wrong";

        return res.status(500).json({
            message,
        });
    }
};

export const logout = (
    _req: AuthRequest,
    res: Response
) => {
    clearAuthCookie(res);

    return res.status(200).json({
        success: true,
        message: "Logged out",
    });
};

export const getMe = async (
    req: AuthRequest,
    res: Response
) => {
    try {
        const user = await User.findById(req.userId).select(
            "-password"
        );

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        return res.status(200).json({
            success: true,
            user: formatUser(user),
        });
    } catch (error: unknown) {
        const message =
            error instanceof Error
                ? error.message
                : "Something went wrong";

        return res.status(500).json({
            message,
        });
    }
};