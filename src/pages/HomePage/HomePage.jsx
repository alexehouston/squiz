import { Link } from 'react-router-dom';
import { useState } from 'react';
import Title from '../../components/Title/Title';
import QuizPage from '../QuizPage/QuizPage';
import Leaderboard from '../../components/Leaderboard/Leaderboard';
import './HomePage.css';

export default function HomePage({ setQuizStart }) {
    const [isShown, setIsShown] = useState(false);
    const [backButton, setBackButton] = useState(false);

    const handleClick = event => {
        setIsShown(current => !current);
    };

    return (
        <main>
            <Title />
            <div className="pixel">
                <Link to="/quiz"><p>Play</p></Link>
            </div>
            <div className="pixel" onClick={handleClick}>
                <p onClick ={() => setBackButton(!backButton)}>{backButton ? 'Back' : 'Scores'}</p>
                {isShown && <Leaderboard />}
            </div>
        </main>
    );
}