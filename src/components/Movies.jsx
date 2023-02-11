/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import FilmsContext from '../context/FilmsContext';
import LoginContext from '../context/LoginContext';
import Loading from './Loading';

function Movies() {
  const { movies, saveFavorite, favorites, removeFavorite, inputText, isLoading, setInputText } = useContext(FilmsContext);
  const {hideSearch, dark} = useContext(LoginContext);
  const filterMovies = movies.filter((mov) => mov.title.toLowerCase().includes(inputText.toLowerCase()))
  return (
    <div className={`'h-screen`} style={{backgroundColor: !dark ? '#58B7EE' : '#144552' }}>
      <div className= {hideSearch ? 'hidden' : 'hidden max-[500px]:flex justify-center items-center '}>
        <input type="text" onChange = {(e) => setInputText(e.target.value)} className='mx-1 flex border-solid border-2 border-navyblue rounded-lg p-3 text-white w-full max-' style={{backgroundColor: !dark ? '#05445E' : '#0B171E' }}/>  
        <img alt="starHome"className='w-8 absolute right-6 ' src={require('../img/lupa.png')}/>
      </div>
      
      {isLoading ? <Loading /> : 
      <div className={`flex flex-row flex-wrap items-center justify-center`} style={{backgroundColor: !dark ? '#58B7EE' : '#144552' }}>
        {
          (!filterMovies.length) ? 'Não existe com esse filtro' :
          filterMovies.map((movie) => (
            <div key={ movie.id } className="" >
              <div className={`rounded-lg shadow-2xl p-3 pb-4 max-w-2xs m-3
              sm:max-w-3xs min-[432px]:max-w-4xs min-[390px]:max-w-xs`}
              style={{backgroundColor: !dark ? '#05445E' : '#0B171E' }}>
                <Link to={ `/movie/${movie.id}` }>
                <img src={ movie.image } alt={ movie.original_title_romanised } className=""/>
                </Link>
                <div className='flex items-center justify-between mt-3'>
                  <p className='text-xl items-center text-white'>{movie.title}</p>
                  <button
                    id="submitBtn"
                    type="submit"
                    onClick={ !favorites.some((favorite) => favorite.id === movie.id) ? () => saveFavorite(movie) : () => removeFavorite(movie) }
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
      }
    </div>
  );
}

export default Movies;
