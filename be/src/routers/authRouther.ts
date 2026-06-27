import { Router } from "express";
import { googleAuth } from "../controllers/authController.js";

const authRouter = Router()

authRouter.post('/firebase/google', googleAuth)

export default authRouter