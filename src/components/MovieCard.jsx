import { useContext } from "react";
import { useLocation } from "react-router-dom";
import FilmsContext from "../context/FilmsContext";
import Header from "./Header";

function MovieCard () {
    const { pathname } = useLocation();
    const id = pathname.slice(7)
    const { movies } = useContext(FilmsContext);
    const movie = movies.filter((m) => m.id === id);
    return (
      <div className='bg-babyblue h-screen'>
        <div className="flex h-screen items-center justify-center">
          <div className="rounded-lg shadow-2xl bg-navyblue p-36 flex flex-col items-center justify-center space-y-3">
            <h1 className="text-white text-6xl">{movie[0].title}</h1>
            <img src={movie[0].movie_banner} alt="" className="" width="500rem"/>
          </div>
        </div>    
      </div>
    )
}

export default MovieCard;