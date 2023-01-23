/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import Header from '../components/Header';
import FilmsContext from '../context/FilmsContext';

export default function Favorites() {
  const { movies, favorites, removeFavorite } = useContext(FilmsContext);
  return (
    <div>
      <Header/>
      <h2> Favoritos </h2>
      {
        favorites.map((movie) => (
          <div key={ movie.id } className="repo">
            <p>{movie.original_title_romanised}</p>
            <img src={ movie.movie_banner } alt={ movie.original_title_romanised } />
            <button
              type="submit"
              onClick={ () => removeFavorite(movie) }
            >
              Desfavoritar
            </button>
          </div>
        ))
      }
    </div>
  );
}
