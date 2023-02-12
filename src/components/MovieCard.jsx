import { useContext } from "react";
import { useLocation } from "react-router-dom";
import FilmsContext from "../context/FilmsContext";
import Header from "./Header";

function MovieCard () {
    const { pathname } = useLocation();
    const id = pathname.slice(7)
    const { movies } = useContext(FilmsContext);
    const movie = movies.filter((m) => m.id === id);
    console.log(movie)
    return (
      <div className='bg-babyblue text-white h-screen flex justify-center items-center'>
          <div className="rounded-lg shadow-2xl bg-navyblue p-3 flex h-[80vh] w-[60vw] flex-col items-center py-5 space-y-2">
            <h1 className="text-2xl">{movie[0].title}</h1>
            <img src={movie[0].movie_banner} alt="" className="" width="500rem"/>
            <h2>Titulo Original: {movie[0].original_title}</h2>
            <h2>Diretor: {movie[0].director}</h2>
            <p> {movie[0].description} </p>
          </div>  
      </div>
    )
}

export default MovieCard;