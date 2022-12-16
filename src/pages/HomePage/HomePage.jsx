import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Leaderboard from '../../components/Leaderboard/Leaderboard';
import * as questionsApi from '../../utilities/question-api';
import './HomePage.css';

export default function HomePage({ setQuestions }) {
    const [isShown, setIsShown] = useState(false);
    const [backButton, setBackButton] = useState(false);

    useEffect(() => {
        async function fetchQuestions() {
        const response = await questionsApi.getQuestions();
        setQuestions(response);
        };
        fetchQuestions();
    }, []);

    const handleClick = evt => {
        setIsShown(current => !current);
    };

    return (
        <main>
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