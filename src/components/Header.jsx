import { Link } from 'react-router-dom';
import { useContext } from 'react';
import LoginContext from '../context/LoginContext';
import FilmsContext from '../context/FilmsContext';


export default function Header() {
  const { dark, setDark, hideSearch, setHideSearch } = useContext(LoginContext);
  const { setInputText} = useContext(FilmsContext);
  return (
    <header className="flex bg-ghibliblue p-3 py-5 shadow w-full max-h-15 justify-between items-center">
      <Link to="/home" className='max-[500px]:w-1/2 '>
         <img alt="logoGhibli"src={require('../img/Studio_Ghibli.png')} className="ml-20 max-[500px]:ml-5 max-[500px]:w-1/2" width="160rem" />
      </Link>
      <div className='flex justify-between' >
        <Link to="/favorites" className='mr-10 flex items-center justify-center border-solid border-2 border-navyblue rounded-lg p-3 hover:scale-110 ease-in duration-300 hover:bg-hoverBlue hover:border-white max-[500px]:border-none max-[500px]:mr-0 max-[500px]:py-3'>
          <img alt="starHome"className='w-7 mr-2 max-[500px]:mr-0' src={require('../img/starWhiteFull.png')}/>
          <small className='text-white text-lg max-[500px]:hidden'>Favoritos</small>
        </Link>
        <Link to="/profile" className='mr-10 flex items-center justify-center border-solid border-2 border-navyblue rounded-lg p-3 hover:scale-110 ease-in duration-300 hover:bg-hoverBlue hover:border-white max-[500px]:border-none max-[500px]:mr-0 max-[500px]:py-3' >
         <img alt="profileAvatar"className='w-7 mr-2 max-[500px]:mr-0' src={require('../img/avatarWhite.png')}/>
         <small className='text-white text-lg max-[500px]:hidden'>Profile</small>
        </Link>
        <div className='relative max-[500px]:absolute'>
          <button onClick={() => setHideSearch(true)}>
            <img alt="starHome"className='w-8 absolute right-12 top-7 max-[500px]:top-0 max-[500px]:relative max-[500px]:top-3 max-[500px]:right-10' src={require('../img/lupa.png')}/>
          </button>
          <input type="text" onChange = {(e) => setInputText(e.target.value)} className='mr-10 flex items-center justify-center border-solid border-2 border-navyblue rounded-lg p-3 bg-navyblue text-white w-60 max-[500px]:hidden'/>   
        </div>
        <button onClick = {() => setDark(!dark )}>
          <img alt="darkbtn"className='w-9 mr-2 hover:scale-125 ease-in duration-300 max-[500px]:w-9'src={ !dark ? require('../img/moon.png') : require('../img/moonDark.png')}/>
        </button>
      </div>
    </header>
  );
}
