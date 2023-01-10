import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Alert, AlertContent } from '../../types'


const slice = createSlice({
  name: 'alert',
  initialState: {
    alert: 'none' as Alert,
    alertContent: {} as AlertContent,
  },
  reducers: {
    setAlert: (s, a: PayloadAction<Alert>) => {
      s.alert = a.payload
    },
    setAlertContent: (s, a: PayloadAction<AlertContent>) => {
      s.alertContent = a.payload
    }
  }
})

export const alertActions = slice.actions

export const alertReducer = slice.reducer

