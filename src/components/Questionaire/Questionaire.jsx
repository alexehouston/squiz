import Enemy from '../../components/Enemy/Enemy';
import * as quizApi from '../../utilities/quiz-api';
import './Questionaire.css'

export default function Questionaire({ q, currentIdx, setCurrentIdx, score, setScore, chances, setChances, user }) {
    const correctSound = document.getElementById('correctSound');
    const incorrectSound = document.getElementById('incorrectSound');


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
            correctSound.play();
        } else {
            setChances(chances - 1);
            setCurrentIdx(currentIdx + 1);
            incorrectSound.play();
        }
        if (chances < 1) {
            saveQuiz();
            setCurrentIdx(20);
            incorrectSound.play();
        }
    }
    
    return (
        <>
            <Enemy />
            <audio id="correctSound" src="assets/music/correct.wav" type="audio/wav" />
            <audio id="incorrectSound" src="/assets/music/incorrect.wav" type="audio/wav" />
            <div id="lives">
                {chances === 3 ? (
                    <div className="hearts">
                        <img className="heart" src="/assets/heart.gif" alt="" />
                        <img className="heart" src="/assets/heart.gif" alt="" />
                        <img className="heart" src="/assets/heart.gif" alt="" />
                    </div>
                ) : chances === 2 ? (
                    <div className="hearts">
                        <img className="heart" src="/assets/heart.gif" alt="" />
                        <img className="heart" src="/assets/heart.gif" alt="" />
                    </div>
                ) : (
                    <div className="hearts">
                        <img className="heart" src="/assets/heart.gif" alt="" />
                    </div>
                )}
            </div>
            <div className="questionaire-container">
                <span className="tag">{q.tag}</span>
                <span className="difficulty">LVL: {q.difficulty}</span>
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