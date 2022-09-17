import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fecthMoviesRes, fecthMoviesSearchRes } from "../api/fecthMovies";
import { RootState } from "../app/store";
import { FecthSearch, Movies } from "../types/interfaces";
import { setLoading } from "./LoadingSlices";

const initialState: Movies = {
  movies: []
}

export const fecthMovies = createAsyncThunk(
  'api/fecthMoviesRes',
  async (typesOfMovies: string, { dispatch }) => {
    dispatch(setLoading(true));
    const moviesRes = await fecthMoviesRes(typesOfMovies)
    dispatch(setMovies(moviesRes))
    dispatch(setLoading(false));
  }
)

export const fecthMoviesSearch = createAsyncThunk(
  'api/fecthMoviesSearchRes',
  async ({ characters, page }: FecthSearch, { dispatch }) => {
    const moviesRes = await fecthMoviesSearchRes(characters, page)
    dispatch(setMovies(moviesRes))
  }
)

export const dataMoviesList = createSlice({
  name: 'movieList',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload
    }
  }
})

export const { setMovies } = dataMoviesList.actions

export const moviesListState = (state: RootState) => state.dataMovieList.movies

export default dataMoviesList.reducer