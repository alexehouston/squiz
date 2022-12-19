import './Questionaire.css'

export default function QuizCard({ q, currentIdx, setCurrentIdx, score, setScore, chances, setChances }) {

    function handleAnswer(evt) {
        let userSelection = evt.target.value;
      
        if (userSelection === q.correct_answer) {
            setScore(score + 10);
            setCurrentIdx(currentIdx+1);
        } else {
            setChances(chances - 1);
            if (chances < 1) {
                setCurrentIdx(20);
            }
            setCurrentIdx(currentIdx+1);
        }
    }
    
    return (
        <>
            <img className="octocat" src="/assets/octocat.gif" />
            <img className="monster" src="/assets/monster.gif" />
            <img className="monster" src="/assets/monster.gif" />
            <img className="monster" src="/assets/monster.gif" />
            <div className="hearts">
                <img className="heart" src="/assets/heart.gif" />
                <img className="heart" src="/assets/heart.gif" />
                <img className="heart" src="/assets/heart.gif" />
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