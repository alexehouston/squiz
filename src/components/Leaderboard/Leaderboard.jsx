import './Leaderboard.css';

export default function Leaderboard() {
    return (
        <div className="leaderboard">
            <img id ="window" src="/assets/window.jpeg" />
            <div className="coins">
                <img id="coin" src="/assets/coin.gif" />
                <img id="coin" src="/assets/coin.gif" />
                <img id="coin" src="/assets/coin.gif" />
                <img id="coin" src="/assets/coin.gif" />
                <img id="coin" src="/assets/coin.gif" />
            </div>
            <div className="players">
                <span className="player">100 PTS - Player 1</span>
                <span className="player">70 PTS - Player 2</span>
                <span className="player">55 PTS - Player 3</span>
                <span className="player">30 PTS - Player 4</span>
                <span className="player">25 PTS - Player 5</span>
            </div>
        </div>
    );
}

