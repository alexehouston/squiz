import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser, currentPage, setCurrentPage, showQuizPage, setShowQuizPage }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
    setCurrentPage('home');
  }

  function handleBack() {
    setShowQuizPage(false);
    setCurrentPage('home');
  }

  return (
    <>
      <span className="welcome">Logged in as {user.name}</span>
      {currentPage === 'quiz' ?
      <>
        <div className="pixel" onClick={handleBack} id="back"><p>Back</p></div>
        <div className="pixel" onClick={handleLogOut} id="logout"><p>Log Out</p></div>
      </>
      :
      <div className="pixel" id="logout" onClick={handleLogOut}><p>Log Out</p></div>
      }    
    </>
  );
}