import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  pizzaItems: [],
  totalPrice: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addPizzaItem(state, action) {
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
    minusPizzaItem(state, action) {
      const findItem = state.pizzaItems.find((obj) => obj.id === action.payload)
      if (findItem) {
        findItem.count--
      }
    },
    removePizzaItem(state, action) {
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

export const {
  addPizzaItem,
  minusPizzaItem,
  removePizzaItem,
  clearPizzaItems,
} = cartSlice.actions

export default cartSlice.reducer
