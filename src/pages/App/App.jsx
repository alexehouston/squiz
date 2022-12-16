import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import QuizPage from '../QuizPage/QuizPage';
import NavBar from '../../components/NavBar/NavBar';
import * as questionsApi from '../../utilities/question-api';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [questions, setQuestions] = useState({});
    // const [currentIndex, setCurrentIndex] = useState(0);
    // const [score, setScore] = useState(0);
    // const [showAnswers, setShowAnswers] = useState(false);
    let currentQuestions = [];

    useEffect(() => {
        async function fetchQuestions() {
        const response = await questionsApi.getQuestions();
        setQuestions(response);
        };
        fetchQuestions();
    }, []);

    useEffect(() => {
        async function randomQuestions() {
            for (let i = 0; i < 20; i++) {
                let ranNum = Math.floor(Math.random() * questions.length);
                // while (currentQuestions.includes(questions[ranNum])) {
                //     ranNum = Math.floor(Math.random() * questions.length);
                // }
                currentQuestions.push(questions[ranNum]);
            };
        };
        randomQuestions();
    }, [questions])

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/quiz" element={<QuizPage currentQuestions={currentQuestions} />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
