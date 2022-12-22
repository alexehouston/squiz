import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import HomePage from '../../pages/HomePage/HomePage';
import Title from '../../components/Title/Title';
import './AuthPage.css';

export default function AuthPage({ user, setUser, currentPage, setCurrentPage }) {
  const [showSignUp, setShowSignUp] = useState(false);
  
  return (
    <main>
    { user ?
      <HomePage />
    :
      <>
        <Title />
        { showSignUp ?
          <SignUpForm setUser={setUser} />
        :
          <LoginForm setUser={setUser} />
        }
        <div className="pixel" id="auth-button" onClick={() => {
          setShowSignUp(!showSignUp);
          setCurrentPage('home');
        }}>{showSignUp ? <p>Log In</p> : <p>Sign Up</p>}</div>
      </>
    }
    </main>
  );
}