import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Program } from '../../types'


const slice = createSlice({
  name: 'input',
  initialState: {
    keyword: '',
    exclude: '',
    highlight: '',
    program: 'youtube-dl' as Program,
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
    setProgram: (s, a: PayloadAction<Program>) => {
      s.program = a.payload
    }
  }
})

export const inputActions = slice.actions

export const inputReducer = slice.reducer

