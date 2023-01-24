/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import Header from '../components/Header';
import FilmsContext from '../context/FilmsContext';

export default function Favorites() {
  const { movies, favorites, removeFavorite } = useContext(FilmsContext);
  return (
    <div className='bg-babyblue h-screen'>
      <Header/>
      <h2> Favoritos </h2>
      <div className="flex flex-row flex-wrap items-center justify-center bg-babyblue">
      {
        favorites.map((movie) => (
          <div key={ movie.id } className="" >
            <div className="rounded-lg shadow-2xl bg-navyblue p-3 pb-4 max-w-2xs m-3
            sm:max-w-3xs min-[432px]:max-w-4xs min-[390px]:max-w-xs">
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
