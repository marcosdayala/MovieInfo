import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fecthMoviesRes, fecthMoviesSearchRes } from "../api/fecthMovies";
import { RootState } from "../app/store";
import { FecthSearch, Movies } from "../types/interfaces";

const initialState: Movies = {
  movies: []
}

export const fecthMovies = createAsyncThunk(
  'api/fecthMoviesRes',
  async (typesOfMovies: string, { dispatch }) => {
    const moviesRes = await fecthMoviesRes(typesOfMovies)
    dispatch(setMovies(moviesRes))
  }
)

export const fecthMoviesSearch = createAsyncThunk(
  'api/fecthMoviesSearchRes',
  async ({ characters, page }: FecthSearch, { dispatch }) => {
    const moviesRes = await fecthMoviesSearchRes(characters, page)
    dispatch(setMovies(moviesRes))
  }
)

export const dataSlices = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload
    }
  }
})

export const { setMovies } = dataSlices.actions

export const movieState = (state: RootState) => state.data.movies

export default dataSlices.reducer