import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css';

export default function AuthPage({ user, setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  
  return (
    <main>
    { user ?
      <>
        <h1>Squiz</h1>
        <h2>Test your knowledge!</h2>
      </>
    :
      <>
        <button class="pixel" onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
        { showSignUp ?
          <SignUpForm setUser={setUser} />
        :
          <LoginForm setUser={setUser} />
        }
      </>
    }
    </main>
  );
}