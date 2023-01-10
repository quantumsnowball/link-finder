import { createSlice } from '@reduxjs/toolkit'
import { ColorMode } from '../../types'


const slice = createSlice({
  name: 'theme',
  initialState: {
    mode: 'dark' as ColorMode
  },
  reducers: {
    toggleMode: s => {
      s.mode = s.mode === 'light' ? 'dark' : 'light'
    }
  }
})

export const themeActions = slice.actions

export const themeReducer = slice.reducer
