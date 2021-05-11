import express from "express";

import { home, createUser } from "../controllers/posts.js";

const router = express.Router();

router.get("/", home);
router.post("/", createUser);

export default router;