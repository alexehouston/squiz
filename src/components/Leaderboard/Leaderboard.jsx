import { useState, useEffect } from 'react';
import * as quizAPI from '../../utilities/quiz-api';
import './Leaderboard.css';

export default function Leaderboard() {
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        async function fetchQuizData() {
        const response = await quizAPI.getQuizData();
        setLeaderboard(response);
        };
        fetchQuizData();
    }, []);

    const sortedLeaderboard = [...leaderboard].sort((a, b) => b.score - a.score);
    const topFive = sortedLeaderboard.slice(0, 5);

    return (
        <div className="leaderboard">
            <span className="leaderboard-title">High Scores</span>
            <div className="coins">
                <img id="coin" src="/assets/coin.gif" alt="" />
                <img id="coin" src="/assets/coin.gif" alt="" />
                <img id="coin" src="/assets/coin.gif" alt="" />
                <img id="coin" src="/assets/coin.gif" alt="" />
                <img id="coin" src="/assets/coin.gif" alt="" />
            </div>
            <div className="players">
                <ul>
                    {topFive.map(entry => (
                        <li key={entry._id} className="player">
                            {entry.score} Points - {entry.user.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

