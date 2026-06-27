import express from "express";
import cors from "cors";
import authRouter from "./routers/authRouther.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter)

app.get("/", (_req, res) => {
    res.send("Server is running");
});

export default app;