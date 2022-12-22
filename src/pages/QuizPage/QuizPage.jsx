import React, { useState, useEffect } from "react";
import HomePage from '../../pages/HomePage/HomePage';
import Questionaire from '../../components/Questionaire/Questionaire';
import Logo from '../../components/Logo/Logo';
import * as questionsApi from '../../utilities/question-api';
import "./QuizPage.css";

export default function QuizPage({ questions, setQuestions, user, selectedCategory, setCurrentPage, currentPage, character, setCharacter }) {
    const [quiz, setQuiz] = useState([]);
    const [currentIdx, setCurrentIdx] = useState(0);
    const [score, setScore] = useState(0);
    const [chances, setChances] = useState(3);
    const [showHomePage, setShowHomePage] = useState(false);

    console.log(character);

    useEffect(() => {
        async function randomQuestions(selectedCategory) {
          const response = await questionsApi.getQuestions({});
          let filteredQuestions = response;
          if (selectedCategory) {
            filteredQuestions = response.filter(question => question.category === selectedCategory);
          }
          let nums = [];
          while (nums.length !== 25) {
            let ranNum = Math.floor(Math.random() * filteredQuestions.length);
            if (!nums.includes(ranNum)) {
              nums.push(ranNum);
            }
          }
          let quizQuestions = [];
          nums.forEach(num => quizQuestions.push(filteredQuestions[num]));
          setQuiz(quizQuestions);
        }
        randomQuestions(selectedCategory);
    }, [selectedCategory]);

    const handleHomeClick = () => {
        setShowHomePage(true);
        setCurrentPage('home');
    };

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
        <>
            {showHomePage ? <HomePage user={user} questions={questions} setQuestions={setQuestions} /> :
                <div className="quiz">
                    <Logo />
                    { currentIdx < 20 ? 
                    <>
                        <span className="question-counter">Question {currentIdx + 1} / {mappedQuestions.length}</span><br />
                        <span className="score-tracker">Score: {score}</span>
                        <div className="questionaire">
                            {mappedQuestions[currentIdx]}
                            {character === 'octocat' ?
                            <img className="octocat" src="/assets/octocat.gif" alt="octocat" />
                            : character === 'kitty' ?
                            <img className="kitty" src="/assets/kitty.gif" alt="kitty" />
                            : character === 'witch' ?
                            <img className="witch" src="/assets/witch.gif" alt="witch" />
                            :
                            <img className="skeleton" src="/assets/skeleton.gif" alt="skeleton" />
                            }
                        </div> 
                    </>
                    : (<div className="game-over">
                        <span>Game Over</span><br />
                        <span>You scored {score} points!</span><br />
                        <div className="pixel" onClick={() => handleHomeClick()}><p>Start Over</p></div>
                    </div>)

                    }
                </div>
            }
        </>
    );
}
