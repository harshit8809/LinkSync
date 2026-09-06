import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware.js";
import {
    saveLinks,
    getLinks,
} from "../controllers/link.controller.js";

const router = Router();

// Save all links
router.post("/", authenticate, saveLinks);

// Get logged-in user's links
router.get("/", authenticate, getLinks);

export default router;