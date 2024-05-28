import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.routes.js";
import messageRouter from "./routes/message.routes.js";
import userRouter from "./routes/user.routes.js";
import connectDB from "./db/index.js";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";

dotenv.config();

const port = process.env.PORT || 7000;


app.use(express.json()) // to parse the incoming requests with JSON payloads
app.use(cookieParser())

app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);
app.use("/api/users", userRouter);

connectDB().then(() => {
    server.listen(port, () => {
        console.log(`Server is listening on port: ${port}`);
    });
}).catch((err) => {
    console.log("MongoDB connection failed !! ", err)
})