import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
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
            <Routes>
              {/* Route components in here */}
              <Route path="/quiz" element={<QuizPage />} />
            </Routes>
          </>
          :
          <HomePage setUser={setUser} />
      }
    </main>
  );
}
