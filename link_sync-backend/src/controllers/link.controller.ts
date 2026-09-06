import type { Response } from "express";
import Link from "../models/Link.js";
import type { AuthRequest } from "../middleware/auth.middleware.js";

export const saveLinks = async (
    req: AuthRequest,
    res: Response
) => {
    try {

        const links = req.body;

        if (!Array.isArray(links)) {
            return res.status(400).json({
                success: false,
                message: "Links should be an array",
            });
        }

        // user id comes from authenticate middleware
        // const userId = req.user?.userId;
        const userId = req.userId;

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Not authenticated",
            });
        }

        // remove old links
        await Link.deleteMany({
            user: userId,
        });

        // prepare new links
        const formattedLinks = links.map(
            (link: any, index: number) => ({
                user: userId,
                platform: link.platform,
                url: link.url,
                enabled: link.enabled,
                order: index,
            })
        );

        // save
        await Link.insertMany(formattedLinks);

        return res.status(201).json({
            success: true,
            message: "Links saved successfully",
        });

    } catch (error: any) {
        console.log("backend_error->", error)

        return res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};






export const getLinks = async (
    req: AuthRequest,
    res: Response
) => {

    try {
        // const userId = req.user?.userId;
        const userId = req?.userId;

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Not authenticated",
            });
        }
        const links = await Link.find({
            user: userId,
            enabled: true,
        }).sort({
            order: 1,
        });
        return res.status(200).json({
            success: true,
            links,
        });

    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};