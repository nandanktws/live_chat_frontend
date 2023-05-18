import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './provider/redux/rootReducer'

export const store = configureStore({
  reducer: rootReducer
})