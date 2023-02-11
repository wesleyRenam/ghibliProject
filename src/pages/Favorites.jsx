/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import Header from '../components/Header';
import FilmsContext from '../context/FilmsContext';
import LoginContext from '../context/LoginContext';

export default function Favorites() {
  const { favorites, removeFavorite } = useContext(FilmsContext);
  const {dark} = useContext(LoginContext)
  return (
    <div className='h-screen' style={{backgroundColor: !dark ? '#58B7EE' : '#144552' }}>
      <Header/>
      <div className="flex flex-row flex-wrap items-center justify-center " 
      style={{backgroundColor: !dark ? '#58B7EE' : '#144552' }}>
      {
        favorites.map((movie) => (
          <div key={ movie.id } className="" >
            <div className="rounded-lg shadow-2xl p-3 pb-4 max-w-2xs m-3
            sm:max-w-3xs min-[432px]:max-w-4xs min-[390px]:max-w-xs"
            style={{backgroundColor: !dark ? '#05445E' : '#0B171E' }}>
              <img src={ movie.image } alt={ movie.original_title_romanised } className=""/>
              <div className='flex items-center justify-between mt-3'>
                <p className='text-xl items-center text-white'>{movie.title}</p>
                <button
                  id="submitBtn"
                  type="submit"
                  onClick={() => removeFavorite(movie) }
                  className='p-2 rounded-md'
                  >
                 {}
                 <img className='w-7' alt="favorito" src={!favorites.some((favorite) => favorite.id === movie.id) ? require('../img/starWhite.png') : require('../img/starBlueGhibli.png')}/>
                </button>
              </div>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  );
}
