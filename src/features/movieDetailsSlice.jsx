import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = `${import.meta.env.VITE_API_KEY}`;

export const fetchMoviesDetails = createAsyncThunk(
    "movies/fetchMoviesDetailsById",
    async (movieId, thunkAPI) => {
  
    const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}`);
    
    if (response.data?.Response === "True") 
    { 
      return response.data;    // returns the details for the selected movie
    }
    else 
    {
      return thunkAPI.rejectWithValue(data.Error);
    }
  }
);

const movieDetailsSlice = createSlice(
  {
    name: "moviesDetails",
    initialState: 
  {
    selectedMovie: null,
    detailStatus: "idle",
    detailError: null,
  },
  reducers: 
  {
    setDialogClose: (state) =>
    {
      state.selectedMovie = null;
    }
  },
  extraReducers: (builder) => 
    {
      builder
      .addCase(fetchMoviesDetails.pending, (state) => 
      {
        state.status = "loading";
      })
      .addCase(fetchMoviesDetails.fulfilled, (state, action) => 
      {
        state.status = "succeeded";
        state.selectedMovie = action.payload;
      })
      .addCase(fetchMoviesDetails.rejected, (state, action) => 
      {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { movieDetail, setDialogClose } = movieDetailsSlice.actions;
export default movieDetailsSlice.reducer;