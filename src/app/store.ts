import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import MoviesListSlices from '../slices/MoviesListSlices';
import LanguagesSlices from '../slices/LanguagesSlices';
import MovieDetailSlices from '../slices/MovieDetailSlices';
import loadingSlice from '../slices/LoadingSlices';

export const store = configureStore({
  reducer: {
    dataMovieList: MoviesListSlices,
    dataMovie: MovieDetailSlices,
    dataLanguage: LanguagesSlices,
    dataLoading: loadingSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
