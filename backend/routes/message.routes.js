import { Router } from "express";

const router = Router()

router.route("/send/:id").post(sendMessage)

export default router;
