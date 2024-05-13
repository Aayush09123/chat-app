import { Router } from "express";
import { sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = Router()

router.route("/send/:id").post(protectRoute, sendMessage);

export default router;
