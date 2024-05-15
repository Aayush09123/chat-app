import { Router } from "express";
import protectRoute from "../middlewares/protectRoute.js";

const router = Router();

router.route("/").get(protectRoute);

export default router;