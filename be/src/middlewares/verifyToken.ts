import type { NextFunction, Request, Response } from "express";
import { verify } from "../libs/jwt.js";
import type { JwtPayload } from "jsonwebtoken";

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1]

    if (!token) return res.status(401).json({ message: 'Unauthorized' })

    try {
        const decoded = verify(token) as JwtPayload
        req.user = decoded
        next()
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token' })
    }
}