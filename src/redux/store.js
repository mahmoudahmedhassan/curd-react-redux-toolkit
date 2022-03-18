import { configureStore } from '@reduxjs/toolkit'
import post from '../redux/index'

export  const store = configureStore({
  reducer: {
    postSlice: post,
  },
})