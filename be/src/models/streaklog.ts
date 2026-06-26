import { model, Schema } from "mongoose";

const streaklogSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date: {
        type: String,
        required: true,
    },
    solved: {
        type: Boolean,
        required: true,
    }
})

const Streaklog = model('Streaklog', streaklogSchema)
export default Streaklog