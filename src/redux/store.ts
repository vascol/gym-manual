import { configureStore } from "@reduxjs/toolkit"

import filter from "./filter/filterSlice"
import cart from "./cart/cartSlice"
import post from "./post/postSlice"
import { useDispatch } from "react-redux"

export const store = configureStore({
  reducer: {
    filter,
    cart,
    post,
  },
})

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
