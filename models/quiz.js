const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scoreSchema = new Schema({
    score: Number
});

const quizSchema = new Schema({
    lives: {
        type: Number,
        min: 3
    },
    user: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    score: [scoreSchema]
});

module.exports = mongoose.model('Quiz', quizSchema);