/* eslint-disable react/prop-types */
import { useMemo, useState, useEffect } from 'react';
import FilmsContext from './FilmsContext';

function FilmsProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hideSearch, setHideSearch] = useState(true);
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) ?? []);

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
  const saveFavorite = (mov) => {
    const favoritesLocalStorage = JSON.parse(localStorage.getItem('favorites')) ?? []
    const favMovies = movies.find((movie) => movie.id === mov.id);
    if (!favorites.includes(favMovies)) {
      setFavorites((old) => [...old, favMovies]);
      favoritesLocalStorage.push(favMovies)
      localStorage.setItem('favorites', JSON.stringify(favoritesLocalStorage))
    }
  };
  const removeFavorite = (movie) => {
    const removedMovie = favorites.filter((each) => each.id !== movie.id)
    setFavorites(removedMovie);
    localStorage.setItem('favorites', JSON.stringify(removedMovie))
  };

  const values = useMemo(() => ({
    movies,
    favorites,
    saveFavorite,
    removeFavorite,
    inputText,
    setInputText,
    isLoading,
    hideSearch,
    setHideSearch
  }), [movies,
    favorites,
    removeFavorite,
    inputText,
    setInputText,
    isLoading,
    hideSearch,
  ]);

  return (
    <FilmsContext.Provider value={ values }>
      { children }
    </FilmsContext.Provider>
  );
}

export default FilmsProvider;
