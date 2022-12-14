// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
// const Quiz = require('./models/quiz');
// const Question = require('./models/question');


// Local variables will come in handy for holding retrieved documents
let user, quiz, question;
let users, quizzes, questions;
