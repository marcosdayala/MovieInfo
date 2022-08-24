import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fecthMoviesRes } from "../api/fecthMovies";
import { RootState } from "../app/store";
import { Movies } from "../types/interfaces";

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