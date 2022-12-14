const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    apiId: {
        type: Number,
        unique: true
    },
    question: {
        type: String,
    },
    choices: {},
    answer: {
        type: String
    },
    tag: {
        type: String
    },
    category: {
        type: String
    },
    difficulty: {
        type: String
    }
});

module.exports = mongoose.model('Question', questionSchema);