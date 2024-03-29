import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import {
  persistReducer, persistStore,
  FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { themeReducer } from './slices/themeSlice'
import { layoutReducer } from './slices/layoutSlice'
import { inputReducer } from './slices/inputSlice'
import { outputReducer } from './slices/outputSlice'
import { alertReducer } from './slices/alertSlice'


// reducers
const rootReducer = combineReducers({
  theme: themeReducer,
  layout: layoutReducer,
  input: inputReducer,
  output: outputReducer,
  alert: alertReducer
})

// store
export const store = configureStore({
  reducer: persistReducer({
    key: 'root',
    storage,
    blacklist: [
      'output',
      'alert',
    ]
  }, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }
    })
})

// persistor
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch

