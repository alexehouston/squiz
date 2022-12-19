import './Questionaire.css'
import axios from 'axios';

export default function QuizCard({ q, currentIdx, setCurrentIdx, score, setScore, chances, setChances }) {

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
            setCurrentIdx(20);
            axios.post('/api/quiz', { score: {score} })
        }
    }
    
    return (
        <>
            <img className="octocat" src="/assets/octocat.gif" alt="" />
            <img className="monster" src="/assets/monster.gif" alt="" />
            <img className="monster" src="/assets/monster.gif" alt="" />
            <img className="monster" src="/assets/monster.gif" alt="" />
            <div className="lives">
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
                    <ul>
                        <li onClick={handleAnswer} value="answer_a" className="choices"><span>{q.choices.answer_a}</span></li>
                        <li onClick={handleAnswer} value="answer_b" className="choices"><span>{q.choices.answer_b}</span></li>
                        <li onClick={handleAnswer} value="answer_c" className="choices"><span>{q.choices.answer_c}</span></li>
                        <li onClick={handleAnswer} value="answer_d" className="choices"><span>{q.choices.answer_d}</span></li>
                    </ul>
                </div>
            </div>
        </>
    )
}