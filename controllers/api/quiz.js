const Quiz = require('../../models/quiz');

module.exports = {
    saveQuizData
};

async function saveQuizData(req, res) {
    const quizData = await req.body;
    res.json(quizData);
}