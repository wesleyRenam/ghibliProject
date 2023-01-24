import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
import { faSun, faMoon }  from '@fortawesome/free-solid-svg-icons'
import LoginContext from '../context/LoginContext';

export default function Header() {
  const { dark, setDark } = useContext(LoginContext);
  return (
    <header className="flex bg-ghibliblue p-3 py-5 shadow w-full max-h-15 justify-evenly items-center">
      <Link to="/home">
         <img src={require('../img/Studio_Ghibli.png')} className="" width="150rem"/>
      </Link>
      <div className='flex justify-between ' >
        <Link to="/favorites" className='mr-10 flex items-center justify-center border-solid border-2 border-navyblue rounded-lg p-3  '>
          <img className='w-7 mr-2 ' src={require('../img/starNavy.png')}/>
          Favoritos
        </Link>
        <Link to="/profile" className='mr-10 flex items-center justify-center border-solid border-2 border-navyblue rounded-lg p-3' >
         <img className='w-7 mr-2 ' src={require('../img/avatar.png')}/>
          Profile
        </Link>
        <button onClick = {() => setDark(!dark )}>
        <FontAwesomeIcon icon={ dark ? faMoon : faSun} className="" />
        </button>
      </div>
    </header>
  );
}
