import { configureStore } from '@reduxjs/toolkit'
import Infinite from './modules/InfiniteSlice'
import menu from './modules/MenuSilice'
import product from './modules/productSlice'
import auth from './modules/authSlice'
import comment from './modules/commentSlice'

export const store = configureStore({
  reducer: {
   Infinite,
   menu,
   product,
   auth,
   comment
  },
})