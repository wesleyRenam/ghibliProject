/* eslint-disable react/prop-types */
import { useContext } from 'react';
import FilmsContext from '../context/FilmsContext';

function Movies() {
  const { movies, saveFavorite } = useContext(FilmsContext);
  return (
    <div className="repos">
      {
        movies.map((movie) => (
          <div key={ movie.id } className="repo">
            <p>{movie.original_title_romanised}</p>
            <img src={ movie.movie_banner } alt={ movie.original_title_romanised } width="200px"/>
            <button
              type="submit"
              onClick={ () => saveFavorite(movie.id) }
            >
              Favoritar
            </button>
          </div>
        ))
      }
    </div>
  );
}

export default Movies;
