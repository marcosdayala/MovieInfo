import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { Loading } from "../types/interfaces";

const initialState: Loading = {
  loading: false
};

export const loadingSlice = createSlice({
  name: 'dataLoading',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
})

export const { setLoading } = loadingSlice.actions;

export const loadingState = (state: RootState) => state.dataLoading;

export default loadingSlice.reducer;