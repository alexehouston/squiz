import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Questionaire from '../../components/Questionaire/Questionaire';
import Logo from '../../components/Logo/Logo';
import * as questionsApi from '../../utilities/question-api';
import "./QuizPage.css";

export default function QuizPage({ questions, setQuestions, user }) {
    const [quiz, setQuiz] = useState([]);
    const [currentIdx, setCurrentIdx] = useState(0);
    const [score, setScore] = useState(0);
    const [chances, setChances] = useState(3);

    useEffect(() => {
        async function randomQuestions() {
            const response = await questionsApi.getQuestions();
            setQuestions(response);
            let nums = [];
            while (nums.length !== 20) {
                let ranNum = Math.floor(Math.random() * questions.length);
                if (!nums.includes(ranNum)) nums.push(ranNum);
            }
            let quizQuestions = questions.filter(function(q, idx) {
                if (nums.includes(idx)) return q;
            })
            setQuiz(quizQuestions);
        };
        randomQuestions();
    }, [])

    let mappedQuestions = quiz.map((q) => 
        <Questionaire 
            q={q}
            key={q._id}
            currentIdx={currentIdx}
            setCurrentIdx={setCurrentIdx}
            score={score}
            setScore={setScore}
            chances={chances}
            setChances={setChances}
            user={user}
            setQuiz={setQuiz}
         />
    )

    return (
        <div className="quiz">
            <Logo />
            { currentIdx < 20 ? 
            <>
                <span className="question-counter">Question {currentIdx + 1} / {mappedQuestions.length}</span><br />
                <span className="score-tracker">Score: {score}</span>
                <div className="questionaire">
                    {mappedQuestions[currentIdx]}
                    <img className="octocat" src="/assets/octocat.gif" alt="" />
                </div> 
            </>
            : (<div className="game-over">
                <span>Game Over</span><br />
                <span>You scored {score} points!</span><br />
                <Link to="/"><div className="pixel"><p>Start Over</p></div></Link>
            </div>)

            }
        </div>
    );
}
