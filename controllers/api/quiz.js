const Quiz = require('../../models/quiz');

module.exports = {
    saveQuizData
};

async function saveQuizData(req, res) {
  const { user, score } = req.body;
  const quiz = new Quiz({ user: user, score: score });
  try {
    await quiz.save();
  } catch (err) {
    res.status(500).send(err);
  }
}