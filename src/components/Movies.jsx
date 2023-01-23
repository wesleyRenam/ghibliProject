/* eslint-disable react/prop-types */
import { useContext } from 'react';
import FilmsContext from '../context/FilmsContext';

function Movies() {
  const { movies, saveFavorite,favorites,removeFavorite } = useContext(FilmsContext);

  return (
    <div className="flex flex-row flex-wrap items-center justify-center bg-teal-100">
      {
        movies.map((movie) => (
          <div key={ movie.id } className="" >
            <div className="rounded-lg shadow-lg bg-slate-300 p-2 max-w-2xs m-4">
              <img src={ movie.image } alt={ movie.original_title_romanised } className=""/>
              <p>{movie.title}</p>
              <div className='items-center justify-center flex'>
                <button
                  id="submitBtn"
                  type="submit"
                  onClick={ !favorites.some((favorite) => favorite.id === movie.id) ? () => saveFavorite(movie) : () => removeFavorite(movie) }
                  className='p-2 rounded-md bg-rose-300 mt-5 hover:bg-rose-400 hover:text-white '
                  value={!favorites.some((favorite) => favorite.id === movie.id) ? 'Fav' : 'DesFav'}
                  >
                 {!favorites.some((favorite) => favorite.id === movie.id) ? 'Fav' : 'DesFav'}
                </button>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Movies;
