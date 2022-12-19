import Enemy from '../../components/Enemy/Enemy';
import './Questionaire.css'
import axios from 'axios';

export default function QuizCard({ q, currentIdx, setCurrentIdx, score, setScore, chances, setChances, user }) {

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
        if (chances < 1) {
            axios.post('/api/quiz', { user: {user}, score: {score} })
            setCurrentIdx(20);
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