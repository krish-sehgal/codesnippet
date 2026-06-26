import { model, Schema } from "mongoose";

const submissionSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    problemId: {
        type: Schema.Types.ObjectId,
        ref: 'Problem',
        required: true
    },
    userAnswer: {
        type: String,
    },
    isCorrect: {
        type: Boolean,
    },
    timeTakenMs: {
        type: Number
    }
}, {
    timestamps: true
})

const Submission = model('Submission', submissionSchema)
export default Submission