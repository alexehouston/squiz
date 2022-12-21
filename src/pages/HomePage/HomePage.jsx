import { useState } from 'react';
import Leaderboard from '../../components/Leaderboard/Leaderboard';
import Title from '../../components/Title/Title';
import QuizPage from '../../pages/QuizPage/QuizPage';
import './HomePage.css';

export default function HomePage({ user, questions, setQuestions, currentPage, setCurrentPage }) {
    const [isShown, setIsShown] = useState(false);
    const [backButton, setBackButton] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [showQuizPage, setShowQuizPage] = useState(false);

    const handleLeaderboard = evt => {
        setIsShown(current => !current);
    };

    const handlePlayClick = () => {
        setShowQuizPage(true);
        setCurrentPage('quiz');
    };

    return (
        <>
            {showQuizPage ? <QuizPage user={user} questions={questions} setQuestions={setQuestions} selectedCategory={selectedCategory} currentPage={currentPage} setCurrentPage={setCurrentPage} /> :
            <main>
                <Title />
                <div className="pixel" onClick={handlePlayClick}>
                    <p>Play</p>
                </div>
                <div className="pixel" onClick={handleLeaderboard}>
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