import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import dataSlices from '../slices/dataSlices';
import dataSlicesLanguage from '../slices/dataSlicesLanguage';
import dataMovieSlices from '../slices/dataSlicesMovie';
import dataSlicesTheme from '../slices/dataSlicesTheme';

export const store = configureStore({
  reducer: {
    data: dataSlices,
    dataMovie: dataMovieSlices,
    dataLanguage: dataSlicesLanguage,
    dataTheme: dataSlicesTheme
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
