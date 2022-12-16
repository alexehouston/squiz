import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import HomePage from '../../pages/HomePage/HomePage';
import Title from '../../components/Title/Title';
import './AuthPage.css';

export default function AuthPage({ user, setUser }) {
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
        <button className="pixel" id="auth-button" onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
      </>
    }
    </main>
  );
}