import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <span className="welcome">Welcome, {user.name}</span>
      &nbsp;&nbsp;<Link className="logout" to="" onClick={handleLogOut}>LOG OUT</Link>
    </nav>
  );
}