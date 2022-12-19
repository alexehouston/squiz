import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Questionaire from '../../components/Questionaire/Questionaire';
import Logo from '../../components/Logo/Logo';
import * as questionsApi from '../../utilities/question-api';
import "./QuizPage.css";

export default function QuizPage({ questions, setQuestions }) {
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
         />
    )

    // const handleAnswer = (correct) => {
	// 	if (correct) {
	// 		setScore(score + 10);
	// 	}

	// 	const nextQ = currentIdx + 1;
	// 	if (nextQ < mappedQuestions.length) {
	// 		setCurrentQ(nextQ);
	// 	} else {
	// 		setShowScore(true);
	// 	}
	// };

    // const handleAnswer = (answer) => {
    //     if (!showAnswers) {
    //       if (answer === mappedQuestions[currentIdx].correct_answer) {
    //         setScore(score+10);
    //       }
    //     }
    //     setShowAnswers(true);
    // }

    return (
        <div className="quiz">
            <Logo />
            { currentIdx < 20 ? 
            <>
            <div className="game-text">
                <span>Question {currentIdx + 1} / {mappedQuestions.length}</span><br />
                <span>Lives: {chances} / 3</span><br />
                <span>Score: {score}</span>
            </div>
            <div className="questionaire">
                {mappedQuestions[currentIdx]}
            </div> 
            </>
            : (<>
                <span>Game Over</span><br />
                <span>You scored {score} points!</span><br />
                <Link to="/"><span>Start Over</span></Link>
            </>)

            }
        </div>
    );
}
