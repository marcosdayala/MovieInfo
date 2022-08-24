import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import dataSlices from '../slices/dataSlices';
import dataMovieSlices from '../slices/dataSlicesMovie';

export const store = configureStore({
  reducer: {
    data: dataSlices,
    dataMovie: dataMovieSlices
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
