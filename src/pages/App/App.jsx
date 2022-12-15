import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import QuizPage from '../QuizPage/QuizPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <HomePage />
            {/* <canvas id="myCanvas">
              <img src="./parallax/1.png" alt="" id="1" />
              <img src="./parallax/2.png" alt="" id="2" />
              <img src="./parallax/3.png" alt="" id="3" />
              <img src="./parallax/4.png" alt="" id="4" />
              <img src="./parallax/5.png" alt="" id="5" />
              <img src="./parallax/6.png" alt="" id="6" />
              <img src="./parallax/7.png" alt="" id="7" />
              <img src="./parallax/8.png" alt="" id="8" />
              <img src="./parallax/9.png" alt="" id="9" />
              <img src="./parallax/10.png" alt="" id="10" />
              <img src="./parallax/11.png" alt="" id="11" />
              <img src="./parallax/12.png" alt="" id="12" />
            </canvas> */}
            <Routes>
              {/* Route components in here */}
              <Route path="/home" element={<HomePage />} />
              <Route path="/quiz" element={<QuizPage />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
