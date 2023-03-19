import { useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import FilmsContext from "../context/FilmsContext";
import LoginContext from "../context/LoginContext";
import Loading from "./Loading";

function MovieCard () {
    const { pathname } = useLocation();
    const id = pathname.slice(7)
    const { movies } = useContext(FilmsContext);
    const { dark, setDark } = useContext(LoginContext);
    const movie = movies.filter((m) => m.id === id);
    return (
      <div className="h-screen">
        {(!movies.length) ? <Loading /> :
          <div className='text-white h-screen w-screen flex justify-center items-center' style={{backgroundColor: !dark ? '#58B7EE' : '#144552' }}>
              <div className="rounded-lg shadow-2xl p-4 flex max-h-[100vh] max-w-[90vw] max-[600px]:w-[80vw] flex-col items-center py-5 space-y-2" style={{backgroundColor: !dark ? '#05445E' : '#162E3C' }}>
                <div className="flex items-center max-w-[90vw] justify-around w-full">
                  <Link to="/home">
                    <img src={require('../img/arrowIcon2.png')} alt="arrow" />
                  </Link>
                  <h1 className="text-2xl">{movie[0].title}</h1> 
                  <button onClick = {() => setDark(!dark )}>
                    <img alt="darkbtn"className='w-11'src={ dark ? require('../img/sun.png') : require('../img/half-moon.png')}/>
                  </button>
                </div>
                <img src={movie[0].movie_banner} alt="" className="" width="600rem"/>
                <h2>Titulo Original: {movie[0].original_title}</h2>
                <h2>Diretor: {movie[0].director}</h2>
                <p> {movie[0].description} </p>
              </div>  
          </div>   
        }
      </div>
      
    )
}

export default MovieCard;