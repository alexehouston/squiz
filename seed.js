require('dotenv').config();
require('./config/database');

const fetch = require('node-fetch');
const Question = require('./models/question');

async function getQuestions(req, res, next) {
    const data = await fetch(`https://quizapi.io/api/v1/questions?apiKey=KfHp9ROQNRv3RTVKOPwJ1gP4XC0ij3nupcHN8Fdz&category=Linux&tags=BASH`);
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