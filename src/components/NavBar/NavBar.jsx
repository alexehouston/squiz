import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser, currentPage, setCurrentPage }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
    setCurrentPage('home');
  }

  return (
    <>
      <span className="welcome">Logged in as {user.name}</span>
      <Link className="logout" to="" onClick={handleLogOut}><div className="pixel" id="logout"><p>Log Out</p></div></Link>
    </>
  );
}