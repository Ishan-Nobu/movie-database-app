import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = `${import.meta.env.VITE_API_KEY}`;

export const fetchMovies = createAsyncThunk(
    "movies/fetchMoviesByName",
    async ({ searchQuery, page = 1 }, thunkAPI) => {

    const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchQuery}&page=${page}`);
    
    if (response.data?.Response === "True") 
    { 
      return response.data?.Search   // returns array of all the movies for the search query
    }
    else 
    {
      return thunkAPI.rejectWithValue(data.Error);
    }
  }
);

const movieSlice = createSlice(
  {
    name: "movies",
    initialState: 
  {
    movies: [],
    searchQuery: "",
    status: "idle",
    error: null,
    page: 1,
  },
  reducers: 
  {
    setSearchQuery: (state, action) => 
    {
      state.searchQuery = action.payload;
      state.page = 1;
    },
    loadMore: (state) =>
    {
      state.page += 1;
    }
  },
  extraReducers: (builder) => 
    {
      builder
      .addCase(fetchMovies.pending, (state) => 
      {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => 
      {
        state.status = "succeeded";
        if (state.page === 1) 
        {
          state.movies = action.payload; 
        } 
        else 
        {
          state.movies.push(...action.payload); 
        }
      })
      .addCase(fetchMovies.rejected, (state, action) => 
      {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { setSearchQuery, loadMore } = movieSlice.actions;
export default movieSlice.reducer;