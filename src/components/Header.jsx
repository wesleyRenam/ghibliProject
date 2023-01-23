import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
import { faSun, faMoon }  from '@fortawesome/free-solid-svg-icons'
import LoginContext from '../context/LoginContext';

export default function Header() {
  const { dark, setDark } = useContext(LoginContext);
  return (
    <header className="flex bg-blue-300 p-4 justify-bet shadow w-full max-h-15 justify-between items-center">
      <Link to="/home">
         <img src={require('../img/Studio_Ghibli.png')} className="" width="100rem"/>
      </Link>
      <Link to="/home">Home</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/profile">Profile</Link>
      <button onClick = {() => setDark(!dark )}>
      <FontAwesomeIcon icon={ dark ? faMoon : faSun} className="" />
      </button>
    </header>
  );
}
