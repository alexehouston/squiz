import Enemy from '../../components/Enemy/Enemy';
import * as quizApi from '../../utilities/quiz-api';
import './Questionaire.css'

export default function Questionaire({ q, currentIdx, setCurrentIdx, score, setScore, chances, setChances, user }) {

    async function saveQuiz() {
        const data = {user: {
            userID: user._id,
            name: user.name,
            createdAt: user.createdAt,
            email: user.email
          },
          score: score
        };
      
        try {
          const response = await quizApi.saveQuiz(data);
          if (response.status === 201) {
            console.log('Quiz saved successfully!');
          } else {
            console.error(`Error saving quiz: ${response.status}`);
          }
        } catch (error) {
          console.error(error);
        }
      }
    
    function handleAnswer(evt) {
        evt.preventDefault();
        let userSelection = evt.target.dataset.value;

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
                <span className="tag">{q.tag}</span>
                <span className="difficulty">Difficulty: {q.difficulty}</span>
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