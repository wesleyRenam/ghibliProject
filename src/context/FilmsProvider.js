/* eslint-disable react/prop-types */
import { useMemo, useState, useEffect } from 'react';
import FilmsContext from './FilmsContext';

function FilmsProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hideSearch, setHideSearch] = useState(true);

  const fetchMovies = async () => {
    setIsLoading(true);
    const response = await fetch('https://api-trybe-frontend.vercel.app/api/ghibli-animations');
    const data = await response.json();
    setMovies(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const [favorites, setFavorites] = useState([]);
  const saveFavorite = (mov) => {
    const favMovies = movies.filter((movie) => movie.id === mov.id);
    if (!favorites.includes(favMovies[0])) setFavorites((old) => [...old, favMovies[0]]);
  };
  const removeFavorite = (movie) => {
    setFavorites(favorites.filter((each) => each.id !== movie.id));
  };

  const values = useMemo(() => ({
    movies, favorites, saveFavorite, removeFavorite, inputText, setInputText, isLoading, hideSearch, setHideSearch
  }), [movies, favorites, removeFavorite, inputText, setInputText, isLoading]);

  return (
    <FilmsContext.Provider value={ values }>
      { children }
    </FilmsContext.Provider>
  );
}

export default FilmsProvider;
