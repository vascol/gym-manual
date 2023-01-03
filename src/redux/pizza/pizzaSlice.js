import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzasStatus",
  async (params, thunkAPI) => {
    const { sortBy, order, category, search, pagination } = params
    const res = await axios.get(
      `https://63948ccc4df9248eada596f8.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}${pagination}`
    )

    if (res.data.length === 0) {
      thunkAPI.rejectWithValue("Піци пусті")
    }

    return thunkAPI.fulfillWithValue(res.data)
  }
)

const initialState = {
  items: [],
  status: "loading", // loading|success|error
}

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setPizzaItems(state, action) {
      state.items = action.payload
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = "loading"
      state.items = []
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload
      state.status = "success"
    },
    [fetchPizzas.rejected]: (state, action) => {
      state.status = "error"
      state.items = []
    },
  },
})

export const { setPizzaItems } = pizzaSlice.actions

export default pizzaSlice.reducer
