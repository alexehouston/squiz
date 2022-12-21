import { useState, useEffect, useHistory } from 'react';
import Leaderboard from '../../components/Leaderboard/Leaderboard';
import Title from '../../components/Title/Title';
import QuizPage from '../../pages/QuizPage/QuizPage';
import * as questionsApi from '../../utilities/question-api';
import './HomePage.css';

export default function HomePage({ questions, setQuestions }) {
    const [isShown, setIsShown] = useState(false);
    const [backButton, setBackButton] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [showQuizPage, setShowQuizPage] = useState(false);

    const handleClick = evt => {
        setIsShown(current => !current);
    };

    const handlePlayClick = () => {
        setShowQuizPage(true);
    };

    useEffect(() => {
        async function fetchQuestions() {
        const response = await questionsApi.getQuestions();
        setQuestions(response);
        };
        fetchQuestions();
    }, []);

    return (
        <>
            {showQuizPage ? <QuizPage questions={questions} setQuestions={setQuestions} selectedCategory={selectedCategory} /> :
            <main>
                <Title />
                <div className="pixel" onClick={handlePlayClick}>
                    <p>Play</p>
                </div>
                <div className="pixel" onClick={handleClick}>
                    <p onClick={() => setBackButton(!backButton)}>{backButton ? 'Back' : 'Scores'}</p>
                    {isShown && <Leaderboard />}
                </div>
                <div className="categories">
                    <label>Category:</label>
                    <select onChange={(evt) => { setSelectedCategory(evt.target.value) }}>
                    <option value="">All</option>
                    <option value="Code">Code</option>
                    <option value="SQL">SQL</option>
                    <option value="DevOps">DevOps</option>
                    <option value="Linux">Linux</option>
                    <option value="Docker">Docker</option>
                    <option value="CMS">CMS</option>
                    </select>
                </div>
            </main>
            }
        </>
    );
}