import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getCartFromLS } from "../../utils/getCartFromLS"
import { RootState } from "../store"
import { CartItem, CartSliceState } from "./cartSliceTypes"

const { items } = getCartFromLS()

const initialState: CartSliceState = {
  postItems: items,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addPostItem(state, action: PayloadAction<CartItem>) {
      const findItem = state.postItems.find(
        (obj) => obj.id === action.payload.id
      )

      if (findItem) {
        findItem.count++
      } else {
        state.postItems.push({
          ...action.payload,
          count: 1,
        })
      }
    },
    removePostItem(state, action: PayloadAction<string>) {
      state.postItems = state.postItems.filter(
        (obj) => obj.id !== action.payload
      )
    },
    clearPostItems(state) {
      state.postItems = []
    },
  },
})

export const selectCart = (state: RootState) => state.cart
export const selectCartItemById = (id: string) => (state: RootState) =>
  state.cart.postItems.find((obj) => obj.id === id)

export const { addPostItem, removePostItem, clearPostItems } = cartSlice.actions

export default cartSlice.reducer
