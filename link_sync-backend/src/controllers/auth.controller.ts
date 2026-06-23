import bcrypt from "bcryptjs";
import User from "../models/User.js";
import type { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const signup = async (
    req: Request,
    res: Response
) => {
    try {
        const { username, email, password } = req.body;

        // validation

        if (!username || !email || !password) {
            return res.status(400).json({
                message: "All fields are required",
            });
        }

        // existing user

        const existingUser = await User.findOne({
            email,
        });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists",
            });
        }

        // hash password

        const hashedPassword =
            await bcrypt.hash(password, 10);

        // create user

        console.log(process.env.JWT_SECRET);

        const user = await User.create({
            username,
            email,
            password: hashedPassword,
        });
        console.log("user created ->", user);

        // generate token

        const token = jwt.sign(
            {
                userId: user._id,
            },
            process.env.JWT_SECRET!,
            {
                expiresIn: "7d",
            }
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return res.status(201).json({
            success: true,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
            },
        });
    } catch (error: any) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

export const login = async (
    req: Request,
    res: Response
) => {
    try {
        const { email, password } = req.body;

        // validation

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required",
            });
        }

        // find user

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "Invalid credentials",
            });
        }

        // compare password

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

        // generate token

        const token = jwt.sign(
            {
                userId: user._id,
            },
            process.env.JWT_SECRET!,
            {
                expiresIn: "7d",
            }
        );
        
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return res.status(200).json({
            success: true,
            token,

            user: {
                id: user._id,
                username: user.username,
                email: user.email,
            },
        });

    } catch (error: any) {
        return res.status(500).json({
            message: error.message,
        });
    }
};