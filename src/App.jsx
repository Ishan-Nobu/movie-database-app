import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "./features/movieSlice";
import Header from "./components/Header";
import MovieList from "./components/Movies";

function App()
{ 
  const dispatch = useDispatch();

  useEffect(() => 
  {
    dispatch(fetchMovies({ searchQuery: "Kung Fu Panda", page: 1})); // default call when first mounted
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen">
      <Header/>
      <MovieList/>
    </div>
  );
};

export default App