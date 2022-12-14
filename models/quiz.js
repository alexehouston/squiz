const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizSchema = new Schema({
    lives: {
        type: Number,
        required: true,
        min: 3
    },
    user: [userSchema],
    score: [scoreSchema]
});

const scoreSchema = new Schema({
    score: {
        type: Number,
        required: true
    },
    required: true
});

module.exports = mongoose.model('Quiz', quizSchema);