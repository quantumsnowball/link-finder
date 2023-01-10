import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Request } from '../../types'


const slice = createSlice({
  name: 'output',
  initialState: {
    requests: [] as Request[]
  },
  reducers: {
    setRequests: (s, a: PayloadAction<Request[]>) => {
      s.requests = a.payload
    },
    pushRequest: (s, a: PayloadAction<Request>) => {
      s.requests = [...s.requests, a.payload]
    }
  }
})

export const outputActions = slice.actions

export const outputReducer = slice.reducer

