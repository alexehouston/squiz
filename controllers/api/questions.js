const Question = require('../../models/question');

module.exports = {
    startQuiz
};

async function startQuiz(req, res, next) {
    const questions = await Question.find({});
    res.json(questions);
}