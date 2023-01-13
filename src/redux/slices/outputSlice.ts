import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Request, Response } from '../../types'


const slice = createSlice({
  name: 'output',
  initialState: {
    requests: [] as Request[],
    responses: [] as Response[]
  },
  reducers: {
    setRequests: (s, a: PayloadAction<Request[]>) => {
      s.requests = a.payload
    },
    pushRequest: (s, a: PayloadAction<Request>) => {
      s.requests = [...s.requests, a.payload]
    },
    setResponses: (s, a: PayloadAction<Response[]>) => {
      s.responses = a.payload
    },
    pushResponse: (s, a: PayloadAction<Response>) => {
      s.responses = [...s.responses, a.payload]
    },
  }
})

export const outputActions = slice.actions

export const outputReducer = slice.reducer

