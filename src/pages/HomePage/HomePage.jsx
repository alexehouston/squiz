import { Link } from 'react';
import './HomePage.css';

export default function HomePage() {
    return (
        <main>
            <h1>Squiz</h1>
            <h2>Test your knowledge!</h2>
            <div className="pixel"><p>Play</p></div>
            <div className="pixel"><p>Scores</p></div>
        </main>
    );
}