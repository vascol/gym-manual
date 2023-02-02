import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"
import { CartItem, CartSliceState } from "./cartSliceTypes"

const initialState: CartSliceState = {
  pizzaItems: [],
  totalPrice: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addPizzaItem(state, action: PayloadAction<CartItem>) {
      const findItem = state.pizzaItems.find(
        (obj) => obj.id === action.payload.id
      )

      if (findItem) {
        findItem.count++
      } else {
        state.pizzaItems.push({
          ...action.payload,
          count: 1,
        })
      }
      state.totalPrice = state.pizzaItems.reduce((sum, obj) => {
        return obj.price * obj.count + sum
      }, 0)
    },
    minusPizzaItem(state, action: PayloadAction<string>) {
      const findItem = state.pizzaItems.find((obj) => obj.id === action.payload)
      if (findItem) {
        findItem.count--
      }
    },
    removePizzaItem(state, action: PayloadAction<string>) {
      state.pizzaItems = state.pizzaItems.filter(
        (obj) => obj.id !== action.payload
      )
    },
    clearPizzaItems(state) {
      state.pizzaItems = []
      state.totalPrice = 0
    },
  },
})

export const selectCart = (state: RootState) => state.cart
export const selectCartItemById = (id: string) => (state: RootState) =>
  state.cart.pizzaItems.find((obj) => obj.id === id)

export const {
  addPizzaItem,
  minusPizzaItem,
  removePizzaItem,
  clearPizzaItems,
} = cartSlice.actions

export default cartSlice.reducer
