import React, { useState, useEffect } from "react";
import * as questionsApi from '../../utilities/question-api';
import QuizCard from '../../components/QuizCard/QuizCard';
import "./QuizPage.css";

export default function QuizPage() {
    const [questions, setQuestions] = useState({});
    // const [currentIndex, setCurrentIndex] = useState(0);
    // const [score, setScore] = useState(0);
    // const [showAnswers, setShowAnswers] = useState(false);
    let currentQuestions = [];

    useEffect(() => {
        async function fetchQuestions() {
        const response = await questionsApi.getQuestions();
        setQuestions(response);
        };
        fetchQuestions();
    }, []);

    useEffect(() => {
        async function randomQuestions() {
            for (let i = 0; i < 20; i++) {
                let ranNum = Math.floor(Math.random() * questions.length);
                // while (currentQuestions.includes(questions[ranNum])) {
                //     ranNum = Math.floor(Math.random() * questions.length);
                // }
                currentQuestions.push(questions[ranNum]);
            };
        };
        randomQuestions();
    }, [questions])

    // console.log(currentQuestions);

    // const handleAnswer = (answer) => {
    //     if (!showAnswers) {
    //     if (answer === questions[currentIndex].correct_answer) {
    //         setScore(score + 10);
    //     }
    //     }
    //     setShowAnswers(true);
    // };

    // const handleNextQuestion = () => {
    //     setCurrentIndex(currentIndex + 1);
    //     setShowAnswers(false);
    // };

    // currentQuestions.forEach(question => {
    //     let valuesArr = Object.values(question);
    //     for (let value in valuesArr) {
    //         console.log(value);
    //     }
    // })

    console.log(currentQuestions);

    return (
        <>
            {currentQuestions[0].question}
        </>
    );
}
