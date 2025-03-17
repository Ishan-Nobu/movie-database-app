import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./features/movieSlice.jsx";
import movieDetailsReducer from "./features/movieDetailsSlice.jsx";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    movieDetails: movieDetailsReducer,
  },
});