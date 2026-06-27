import jwt from "jsonwebtoken"

export const signToken = (payload: Object) => {
    const token = jwt.sign(
        payload,
        process.env.JWT_SECRET as string,
        { expiresIn: '7d' }
    )

    return token
}

export const verify = (token: string) => {
    const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET as string
    )

    return decoded
}