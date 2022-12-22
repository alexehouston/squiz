import { useState, useEffect, useRef } from 'react';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import 'animate.css';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [questions, setQuestions] = useState([]);
  const [showQuizPage, setShowQuizPage] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const audioRef = useRef(null);

  useEffect(() => {
      if (currentPage === 'home') {
      audioRef.current.src = '/assets/music/home.wav';
      } else if (currentPage === 'quiz') {
      audioRef.current.src = '/assets/music/gameplay.wav';
      }
      audioRef.current.play();
  }, [currentPage]);

  return (
    <main className="App">
      <audio ref={audioRef} autoPlay loop />
      { user ?
          <>
            <NavBar user={user} setUser={setUser} currentPage={currentPage} setCurrentPage={setCurrentPage} showQuizPage={showQuizPage} setShowQuizPage={setShowQuizPage} />
            <HomePage user={user} questions={questions} setQuestions={setQuestions} currentPage={currentPage} setCurrentPage={setCurrentPage} showQuizPage={showQuizPage} setShowQuizPage={setShowQuizPage} />
          </>
          :
          <AuthPage setUser={setUser} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      }
      <Footer />
    </main>
  );
}
