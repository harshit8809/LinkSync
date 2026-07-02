import type { CookieOptions, Response } from "express";
import jwt from "jsonwebtoken";

export const ACCESS_TOKEN_COOKIE = "token";

const isProduction = process.env.NODE_ENV === "production";

export const authCookieOptions: CookieOptions = {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
    path: "/",
};

export const clearAuthCookieOptions: CookieOptions = {
    httpOnly: authCookieOptions.httpOnly,
    secure: authCookieOptions.secure,
    sameSite: authCookieOptions.sameSite,
    path: authCookieOptions.path,
};

export function signAuthToken(userId: string): string {
    const secret = process.env.JWT_SECRET;

    if (!secret) {
        throw new Error("JWT_SECRET is not configured");
    }

    return jwt.sign({ userId }, secret, {
        expiresIn: "7d",
    });
}

export function setAuthCookie(
    res: Response,
    token: string
): void {
    res.cookie(ACCESS_TOKEN_COOKIE, token, authCookieOptions);
}

export function clearAuthCookie(res: Response): void {
    res.clearCookie(ACCESS_TOKEN_COOKIE, clearAuthCookieOptions);
}
