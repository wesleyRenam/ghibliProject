import { Link } from 'react-router-dom';
import { useContext } from 'react';
import LoginContext from '../context/LoginContext';
import FilmsContext from '../context/FilmsContext';


export default function Header() {
  const { dark, setDark } = useContext(LoginContext);
  const { setInputText} = useContext(FilmsContext);
  return (
    <header className="flex bg-ghibliblue p-3 py-5 shadow w-full max-h-15 justify-between items-center">
      <Link to="/home">
         <img alt="logoGhibli"src={require('../img/Studio_Ghibli.png')} className="ml-20" width="160rem"/>
      </Link>
      <div className='flex justify-between ' >
        <Link to="/favorites" className='mr-10 flex items-center justify-center border-solid border-2 border-navyblue rounded-lg p-3 hover:scale-110 ease-in duration-300 hover:bg-hoverBlue hover:border-white '>
          <img alt="starHome"className='w-7 mr-2 ' src={require('../img/starWhiteFull.png')}/>
          <small className='text-white text-lg'>Favoritos</small>
        </Link>
        <Link to="/profile" className='mr-10 flex items-center justify-center border-solid border-2 border-navyblue rounded-lg p-3 hover:scale-110 ease-in duration-300 hover:bg-hoverBlue hover:border-white' >
         <img alt="profileAvatar"className='w-7 mr-2 ' src={require('../img/avatarWhite.png')}/>
         <small className='text-white text-lg'>Profile</small>
        </Link>
        <div className='relative'>
          <img alt="starHome"className='w-8 absolute right-12 top-2' src={require('../img/lupa.png')}/>
          <input type="text" onChange = {(e) => setInputText(e.target.value)} className='mr-10 flex items-center justify-center border-solid border-2 border-navyblue rounded-lg p-3 bg-navyblue text-white w-60'/>   
        </div>
        <button onClick = {() => setDark(!dark )}>
          <img alt="darkbtn"className='w-9 mr-2 hover:scale-125 ease-in duration-300'src={ !dark ? require('../img/moon.png') : require('../img/moonDark.png')}/>
        </button>
      </div>
    </header>
  );
}
