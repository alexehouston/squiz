import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import QuizPage from '../QuizPage/QuizPage';
import NavBar from '../../components/NavBar/NavBar';
import Title from '../../components/Title/Title';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [questions, setQuestions] = useState([]);

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Title />
            <Routes>
              <Route path="/" element={<HomePage setQuestions={setQuestions} />}></Route>
              <Route path="/quiz" element={<QuizPage questions={questions} setQuestions={setQuestions} />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
