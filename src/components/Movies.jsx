import { useDispatch, useSelector } from "react-redux";
import MovieDetails from "./MovieDetails";
import { loadMore, fetchMovies } from "../features/movieSlice";
import MovieCard from "./MovieCard";
import loading from "../assets/loading.gif"

function MovieList() 
{
  const { movies, status, error, page, searchQuery } = useSelector((state) => state.movies);
  const { selectedMovie } = useSelector((state) => state.movieDetails);
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    dispatch(loadMore());
    dispatch(fetchMovies({ searchQuery, page: page + 1 }));
  }

  if (status === "loading") return <div className="m-auto size-10"> <img src={loading} alt="Loading..." /> </div>;
  if (status === "failed") return <div className="m-auto text-red-500 text-bold text-center"> <p>Oops! Can't find the requested movie(s)</p> </div> ;

  return (
    <div className="flex flex-col">
      <div className="max-w-1500 m-10 flex flex-row flex-wrap items-center justify-center gap-6">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
      {selectedMovie && <MovieDetails />}
      </div>
      {movies.length >= 10 && (
          <button onClick={handleLoadMore} className=" bg-blue-500 text-white px-4 py-2 rounded m-auto cursor-pointer hover:bg-blue-700 transition">
          Load More</button>
        )}
    </div>
  );
};

export default MovieList;