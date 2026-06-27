import { model, Schema } from "mongoose";

const userSchema = new Schema({
    googleId: {
        type: String,
        unique: true,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    avatar: {
        type: String,
    },
    streakCount: {
        type: Number,
        default: 0
    },
    lastSolveDate: {
        type: Date
    },
    freezeTokens: {
        type: Number,
        default: 1,
    },
    xp: {
        type: Number,
        default: 0,
    },
    plan: {
        type: String,
        enum: ['free', 'pro'],
        default: 'free'
    }
}, {
    timestamps: true
})

const User = model('User', userSchema)
export default User