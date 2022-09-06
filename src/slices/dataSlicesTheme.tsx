import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../app/store";
import { ColorTheme } from "../types/interfaces";

const initialState: ColorTheme = {
  blackTheme: false
}

export const dataSlicesTheme = createSlice({
  name: 'dataTheme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.blackTheme = action.payload
    }
  }
})

export const { setTheme } = dataSlicesTheme.actions

export const themeState = (state: RootState) => state.dataTheme.blackTheme

export default dataSlicesTheme.reducer