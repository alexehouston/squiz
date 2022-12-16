import React, { useState, useEffect } from "react";
import * as questionsApi from '../../utilities/question-api';
import Question from "../../components/Question/Question";
import "./QuizPage.css";

export default function QuizPage() {
    const [questions, setQuestions] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showAnswers, setShowAnswers] = useState(false);

    useEffect(() => {
        const fetchQuestions = async () => {
        const response = await questionsApi.getQuestions();
        setQuestions(response);
        
        };
        fetchQuestions();
    }, []);

    const handleAnswer = (answer) => {
        if (!showAnswers) {
        if (answer === questions[currentIndex].correct_answer) {
            setScore(score + 10);
        }
        }
        setShowAnswers(true);
    };

    const handleNextQuestion = () => {
        setCurrentIndex(currentIndex + 1);
        setShowAnswers(false);
    };

    return (
        {response.length > 0 ? (
            <div className="container">
                {currentIndex >= response.length ? (
                    <h1>Game Ended, Your Score is {score}</h1>
                ) : (
                    <Question
                    handleAnswer={handleAnswer}
                    showAnswers={showAnswers}
                    handleNextQuestion={handleNextQuestion}
                    data={response[currentIndex]}
                    />
                )}
            </div>
        ) : (
            <div className="container">Loading...</div>
        )}
    )
}
