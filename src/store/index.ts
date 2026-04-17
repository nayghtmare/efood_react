import { configureStore } from '@reduxjs/toolkit'
import api from '../services/api'

export const store = configureStore({
  reducer: {
    // carrinho removido
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
