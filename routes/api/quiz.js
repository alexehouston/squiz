const express = require('express');
const router = express.Router();
const quizCtrl = require('../../controllers/api/quiz');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, quizCtrl.startQuiz);

module.exports = router;