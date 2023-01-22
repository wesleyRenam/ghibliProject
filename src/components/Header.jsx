import { Link } from 'react-router-dom';
import { useContext } from 'react';
import LoginContext from '../context/LoginContext';

export default function Header() {
  const { dark, setDark } = useContext(LoginContext);
  return (
    <header className="header-container" display="flex">
       <Link to="/home">LOGO</Link>
       <div>
          Seja bem vindo
       </div>
       <button onClick = {() => setDark(!dark )}>
          {dark ? 'Dark' : 'Light'}
       </button>
    </header>
  );
}
