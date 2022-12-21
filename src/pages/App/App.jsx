import { useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import QuizPage from '../QuizPage/QuizPage';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import 'animate.css';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [questions, setQuestions] = useState([]);

  const audioRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      audioRef.current.src = '/assets/music/home.wav';
    } else if (location.pathname === '/quiz') {
      audioRef.current.src = '/assets/music/gameplay.wav';
    }
    audioRef.current.play();
  }, [location]);

  return (
    <main className="App">
      <audio ref={audioRef} autoPlay loop />
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/" element={<HomePage questions={questions} setQuestions={setQuestions} />}></Route>
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
      <Footer />
    </main>
  );
}
