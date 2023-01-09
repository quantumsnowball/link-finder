import { createSlice } from '@reduxjs/toolkit'


const sharedSlice = createSlice({
  name: 'shared',
  initialState: {
  },
  reducers: {
  }
})

export const sharedActions = sharedSlice.actions

export const sharedReducer = sharedSlice.reducer

