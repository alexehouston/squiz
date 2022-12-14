const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    question: {
        type: String,
        required: true
    },
    answers: {
        answer_a: {
            type: String
        },
        answer_b: {
            type: String
        },
        answer_c: {
            type: String
        },
        answer_d: {
            type: String
        },
        required: true
    },
    correct_answer: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    difficulty: {
        type: String
    }
});

module.exports = mongoose.model('Question', questionSchema);