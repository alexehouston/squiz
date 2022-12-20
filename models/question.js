const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    apiId: { type: Number, unique: true },
    question: String,
    choices: {},
    answer: {},
    tag: String,
    category: String,
    difficulty: String
});

module.exports = mongoose.model('Question', questionSchema);