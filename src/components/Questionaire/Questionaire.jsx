import { useState, useEffect, useRef, useCallback } from 'react';
import Enemy from '../../components/Enemy/Enemy';
import * as quizApi from '../../utilities/quiz-api';
import './Questionaire.css'

export default function Questionaire({ q, currentIdx, setCurrentIdx, score, setScore, chances, setChances, user, quiz, setQuiz }) {

    function handleAnswer(evt) {
        evt.preventDefault();
        let userSelection = evt.target.dataset.value;
        console.log(userSelection);

        if (userSelection === 'true') {
            setScore(score + 10);
            setCurrentIdx(currentIdx + 1);
        } else {
            setChances(chances - 1);
            setCurrentIdx(currentIdx + 1);
        }
    
        if (chances < 1) {
            saveQuiz();
            setCurrentIdx(20);
        }
    }

    async function saveQuiz() {
        const data = await quizApi.saveQuiz({ user, score });
        console.log(user, score);
        console.log(data);
    }
    
    return (
        <>
            <Enemy />
            <div id="lives" className="animate__bounceIn">
                {chances === 3 ? (
                    <>
                        <img className="heart" src="/assets/heart.gif" alt="" />
                        <img className="heart" src="/assets/heart.gif" alt="" />
                        <img className="heart" src="/assets/heart.gif" alt="" />
                    </>
                ) : chances === 2 ? (
                    <>
                        <img className="heart" src="/assets/heart.gif" alt="" />
                        <img className="heart" src="/assets/heart.gif" alt="" />
                    </>
                ) : (
                    <>
                        <img className="heart" src="/assets/heart.gif" alt="" />
                    </>
                )}
            </div>
            <div className="questionaire-container">
                <span className="tag">{q.tag} / {q.difficulty}</span>
                <div className="questionaire">
                    <span className="question">{q.question}</span>
                    <ul className="choices">
                        <li onClick={handleAnswer} data-value={q.answer.answer_a_correct}>
                            &nbsp;{q.choices.answer_a}
                        </li>
                        <li onClick={handleAnswer} data-value={q.answer.answer_b_correct}>
                            &nbsp;{q.choices.answer_b}
                        </li>
                        {q.choices.answer_c !== null ? (
                            <li onClick={handleAnswer} data-value={q.answer.answer_c_correct}>
                                &nbsp;{q.choices.answer_c}
                            </li>
                        ) : ''}
                        {q.choices.answer_d !== null ? (
                            <li onClick={handleAnswer} data-value={q.answer.answer_d_correct}>
                                &nbsp;{q.choices.answer_d}
                            </li>
                        ) : ''}
                    </ul>
                </div>
            </div>
        </>
    )
}