import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const slice = createSlice({
  name: 'input',
  initialState: {
    keyword: '',
    exclude: '',
    highlight: '',
  },
  reducers: {
    setKeyword: (s, a: PayloadAction<string>) => {
      s.keyword = a.payload
    },
    setExclude: (s, a: PayloadAction<string>) => {
      s.exclude = a.payload
    },
    setHighlight: (s, a: PayloadAction<string>) => {
      s.highlight = a.payload
    },
  }
})

export const inputActions = slice.actions

export const inputReducer = slice.reducer

