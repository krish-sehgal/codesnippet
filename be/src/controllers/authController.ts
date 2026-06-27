import type { Request, Response } from "express";
import { authUser } from "../services/authService.js";

export const googleAuth = async (req: Request, res: Response) => {
    const { idToken } = req.body

    if (!idToken) {
        return res.status(400).json({
            message: "ID token is required",
        });
    }

    try {
        const { token, user } = await authUser(idToken);

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? "none" : "lax"
        })

        res.json({
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                avatar: user.avatar,
                plan: user.plan,
                streakCount: user.streakCount,
            },
        })
    } catch (error) {
        console.error(error);

        res.status(401).json({
            message: 'something went wrong'
        })
    }
}