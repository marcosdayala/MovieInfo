import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fecthMovieResReviews, fecthMovieResSimilar, fecthMoviesResDetail } from "../api/fecthMovies";
import { RootState } from "../app/store";
import { FecthLanguage, MovieDetailsAll } from "../types/interfaces";

const initialState: MovieDetailsAll = {
  movie: {
    title: '',
    poster_path: '',
    id: 0,
    genres: [],
    overview: '',
    release_date: '',
    vote_average: 0,
    backdrop_path: '',
    link: ''
  },
  reviews: [],
  similar: [],
}

export const fecthMovieDetails = createAsyncThunk(
  'api/fecthMoviesResDetail',
  async ({ id, language }: FecthLanguage, { dispatch }) => {
    const movieRes = await fecthMoviesResDetail(id, language)
    dispatch(setMovie(movieRes))
  }
)

export const fecthMovieReviews = createAsyncThunk(
  'api/fecthMovieResReviews',
  async ({ id, language }: FecthLanguage, { dispatch }) => {
    const movieRes = await fecthMovieResReviews(id, language)
    dispatch(setMovieReviews(movieRes))
  }
)

export const fecthMovieSimilar = createAsyncThunk(
  'api/fecthMovieResSimilar',
  async ({ id, language }: FecthLanguage, { dispatch }) => {
    const movieRes = await fecthMovieResSimilar(id, language)
    dispatch(setMovieSimilar(movieRes))
  }
)

export const dataMovieSlices = createSlice({
  name: 'dataMovie',
  initialState,
  reducers: {
    setMovie: (state, action) => {
      state.movie = action.payload.data
      state.movie.link = action.payload.link
    },
    setMovieReviews: (state, action) => {
      state.reviews = action.payload
    },
    setMovieSimilar: (state, action) => {
      state.similar = action.payload
    }
  }
})

export const { setMovie, setMovieReviews, setMovieSimilar } = dataMovieSlices.actions

export const movieDetailState = (state: RootState) => state.dataMovie;

export default dataMovieSlices.reducer