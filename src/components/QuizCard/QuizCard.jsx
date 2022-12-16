import HomePage from '../../pages/HomePage/HomePage';

export default function QuizCard({ currentQuestions }) {
    console.log(currentQuestions);
    return (
        <div className="quiz-container">
            <span className="question">
                {currentQuestions[0].question}
            </span>
            <ul>
                <li>{currentQuestions[0].choices.answer_a}</li>
                <li>{currentQuestions[0].choices.answer_b}</li>
                <li>{currentQuestions[0].choices.answer_c}</li>
                <li>{currentQuestions[0].choices.answer_d}</li>
            </ul>
        </div>
    )
}