import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery, fetchMovies} from "../features/movieSlice.jsx";
import { FaSearch } from "react-icons/fa";

function Header()
{
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.movies.searchQuery);

  const handleSearch = (e) => {
    if(e.type === "click" || e.keyCode === 13)
    { 
      dispatch(fetchMovies( { searchQuery: searchQuery, page: 1 } ));
    }
  };

  return (
    <div className="bg-gray-900 text-white p-4 flex flex-col justify-between items-center gap-10">
      <h1 className="text-4xl font-bold mt-10 mb-5">🎬 Movie Catalogue</h1>
      <div className="flex flex-row items-center gap-5">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          onKeyDown={handleSearch}
          placeholder="Search movies..."
          className="w-150 px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none"
        />
        <FaSearch onClick={handleSearch} className="size-6 cursor-pointer hover:scale-150 transition"/>
      </div>
    </div>
  );
};

export default Header;