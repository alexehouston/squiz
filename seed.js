require('dotenv').config();
require('./config/database');

const fetch = require('node-fetch');
const ROOT_URL = 'https://quizapi.io/api/v1/questions';
const key = process.env.API_KEY;
const Question = require('./models/question');

async function getQuestions(req, res, next) {
    const data = await fetch(`${ROOT_URL}?apiKey=${key}&tags=HTML`);
    const quizData = await data.json();
    for (question of quizData) {
        const exists = await Question.exists({apiId:question.id})
        if (!exists) {
            await Question.create({
                apiId: question.id,
                question: question.question,
                choices: question.answers,
                answer: question.correct_answer,
                tag: question.tags[0].name,
                category: question.category,
                difficulty: question.difficulty
            })
        }
    }
    console.log('Finished!');
}

getQuestions();