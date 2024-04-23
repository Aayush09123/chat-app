import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.routes.js";

dotenv.config();

const port = process.env.PORT || 7000;

const app = express();

app.use("/api/auth", authRouter);

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});