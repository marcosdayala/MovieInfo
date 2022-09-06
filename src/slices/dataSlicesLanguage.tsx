import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../app/store";
import { Language } from "../types/interfaces";

const initialState: Language = {
  language: 'US'
}

if (sessionStorage.getItem('language') == '"ES"') {
  initialState.language = 'ES'
}

export const dataSlicesLanguages = createSlice({
  name: 'dataLanguage',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload
    }
  }
})

export const { setLanguage } = dataSlicesLanguages.actions

export const languageState = (state: RootState) => state.dataLanguage.language

export default dataSlicesLanguages.reducer