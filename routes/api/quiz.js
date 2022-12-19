const express = require('express');
const router = express.Router();
const quizCtrl = require('../../controllers/api/quiz');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/', ensureLoggedIn, quizCtrl.saveQuizData);

module.exports = router;