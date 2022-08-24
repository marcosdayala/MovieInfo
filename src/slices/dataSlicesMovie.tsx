import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fecthMoviesResDetail } from "../api/fecthMovies";
import { RootState } from "../app/store";
import { MovieDetails } from "../types/interfaces";

const initialState: MovieDetails = {
  title: '',
  poster_path: '',
  id: 0,
  genres: [],
  overview: '',
  release_date: '',
  vote_average: 0
}

export const fecthMovieDetails = createAsyncThunk(
  'api/fecthMoviesResDetail',
  async (id: number, { dispatch }) => {
    const movieRes = await fecthMoviesResDetail(id)
    dispatch(setMovie(movieRes))
  }
)

export const dataMovieSlices = createSlice({
  name: 'dataMovie',
  initialState,
  reducers: {
    setMovie: (state, action) => {
      state.title = action.payload.title
      state.poster_path = action.payload.poster_path
      state.id = action.payload.id
      state.genres = action.payload.genres
      state.overview = action.payload.overview
      state.release_date = action.payload.release_date
      state.vote_average = action.payload.vote_average
    }
  }
})

export const { setMovie } = dataMovieSlices.actions

export const movieState = (state: RootState) => state.dataMovie;

export default dataMovieSlices.reducer