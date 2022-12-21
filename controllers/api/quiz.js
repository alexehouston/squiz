const Quiz = require('../../models/quiz');

module.exports = {
    getQuizData,
    saveQuizData
};

async function getQuizData(req, res) {
  const quiz = await Quiz.find({});
  res.json(quiz);
}

async function saveQuizData(req, res) {
  const { user, score } = req.body;
  const quiz = new Quiz({ user: user, score: score });
  try {
    await quiz.save();
  } catch (err) {
    res.status(500).send(err);
  }
}