import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  items: [],
}

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setPizzaItems(state, action) {
      state.setPizzaItems = action.payload
    },
  },
})

export const { setPizzaItems } = pizzaSlice.actions

export default pizzaSlice.reducer
