const Quiz = require('../../models/quiz');

module.exports = {
    saveQuizData
};

async function saveQuizData(req, res) {
    const questions = await Quiz.create({});
    res.json(questions);
}