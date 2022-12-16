import './Questionaire.css'

export default function QuizCard({ q, currentIdx, setCurrentIdx }) {

    const handleNextQ = () => {
        setCurrentIdx(currentIdx+1);
    }
    
    return (
        <div className="questionaire">
            <span>{q.question}</span>
            <ul onClick={handleNextQ}>
                <li className="choices"><span>{q.choices.answer_a}</span></li>
                <li className="choices"><span>{q.choices.answer_b}</span></li>
                <li className="choices"><span>{q.choices.answer_c}</span></li>
                <li className="choices"><span>{q.choices.answer_d}</span></li>
            </ul>
        </div>
    )
}