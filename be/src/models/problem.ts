import { model, Schema } from "mongoose";

const problemSchema = new Schema({
    language: {
        type: String,
        enum: ['javascript'],
        required: true,
    },
    difficulty: {
        type: String,
        enum: ['easy', 'medium', 'hard'],
        required: true,
    },
    title: {
        type: String,
    },
    codeSnippet: {
        type: String,
        required: true,
    },
    correctOutput: {
        type: String,
        required: true,
    },
    tags: [{
        type: String,
    }],
    status: {
        type: String,
        enum: ['draft', 'scheduled', 'live', 'archived'],
        default: 'draft',
    },
    scheduledDate: {
        type: Date
    }
}, {
    timestamps: true
})

const Problem = model('Problem', problemSchema)
export default Problem