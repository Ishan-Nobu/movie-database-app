import { memo } from 'react'
import { fetchMoviesDetails } from "../features/movieDetailsSlice";
import { useDispatch } from 'react-redux';

const MovieCard = memo(({ movie }) => 
{   
    const dispatch = useDispatch();

    return (
      <div onClick={() => dispatch(fetchMoviesDetails(movie.imdbID))} className="bg-gray-800 p-4 rounded-lg mb-5 cursor-pointer hover:bg-gray-700 transition">
        <img src={movie.Poster} alt={movie.Title} className="w-55 h-84 rounded-md" />
        <div className="w-55 h-20 mt-4 overflow-hidden content-center">
          <h2 className="text-white text-center text-lg">{movie.Title}</h2>
        </div>
      </div>
    );
  });

export default MovieCard;