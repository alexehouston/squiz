const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizSchema = new Schema({
    user: {
      userID: String,
      name: String,
      createdAt: Date,
      email: String
    },
    score: Number
});

module.exports = mongoose.model('Quiz', quizSchema);