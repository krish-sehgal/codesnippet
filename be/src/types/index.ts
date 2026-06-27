export interface IUser extends Document {
    googleId: string
    name: string
    email: string
    avatar: string
    streakCount: number
    lastSolvedDate: Date
    freezeTokens: number
    xp: number
    plan: 'free' | 'pro'
    joinedAt: Date
}