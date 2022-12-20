import { useEffect, useRef } from 'react';
import Enemy from '../../components/Enemy/Enemy';
import * as quizApi from '../../utilities/quiz-api';
import './Questionaire.css'

export default function Questionaire({ q, currentIdx, setCurrentIdx, score, setScore, chances, setChances, user, quiz, setQuiz }) {

    useEffect(() => {
        async function saveQuiz() {
            const response = await quizApi.saveQuizData(user, score);
          }
        if (chances < 1) {
          saveQuiz();
          setCurrentIdx(20);
        }
      }, [chances]);

    function handleAnswer(evt) {
        evt.preventDefault();
        let userSelection = evt.target.value;
        
        if (userSelection === q.correct_answer) {
            setScore(score + 10);
            setCurrentIdx(currentIdx+1);
        } else {
            setChances(chances - 1);
            setCurrentIdx(currentIdx+1);
        }
    }
    
    return (
        <>
            <img className="octocat" src="/assets/octocat.gif" alt="" />
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
                <div className="questionaire">
                    <span className="question">{q.question}</span>
                    <ul className="choices">
                        <li onClick={handleAnswer} value="answer_a"><span>{q.choices.answer_a}</span></li>
                        <li onClick={handleAnswer} value="answer_b"><span>{q.choices.answer_b}</span></li>
                        {q.choices.answer_c !== null ? (
                            <li onClick={handleAnswer} value="answer_c"><span>{q.choices.answer_c}</span></li>
                        ) : ''}
                        {q.choices.answer_d !== null ? (
                            <li onClick={handleAnswer} value="answer_d"><span>{q.choices.answer_d}</span></li>
                        ) : ''}
                    </ul>
                </div>
            </div>
        </>
    )
}