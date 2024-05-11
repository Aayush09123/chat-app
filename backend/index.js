import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.routes.js";
import messageRouter from "./routes/message.routes.js";
import connectDB from "./db/index.js";

dotenv.config();

const port = process.env.PORT || 7000;

const app = express();

app.use(express.json()) // to parse the incoming requests with JSON payloads

app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter)

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is listening on port: ${port}`);
    });
}).catch((err) => {
    console.log("MongoDB connection failed !! ", err)
})