const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scoreSchema = new Schema({
    score: Number
});

const quizSchema = new Schema({
    user: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    score: [scoreSchema]
});

module.exports = mongoose.model('Quiz', quizSchema);