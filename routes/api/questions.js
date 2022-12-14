const express = require('express');
const router = express.Router();
const questionCtrl = require('../../controllers/api/question');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, questionCtrl.getQuestions);