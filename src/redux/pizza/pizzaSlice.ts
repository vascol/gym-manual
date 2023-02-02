import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"
import { RootState } from "../store"
import {
  Pizza,
  SearchPizzaParams,
  PizzaSliceState,
  Status,
} from "./pizzaSliceTypes"

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
  "pizza/fetchPizzasStatus",
  async (params, thunkAPI) => {
    const { sortBy, order, category, search, currentPage } = params
    const { data } = await axios.get<Pizza[]>(
      `https://63948ccc4df9248eada596f8.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}${currentPage}`
    )

    // if (res.data.length) {
    //   thunkAPI.rejectWithValue("Піци пусті")
    // }

    // return thunkAPI.fulfillWithValue(res.data)

    return data
  }
)

const initialState: PizzaSliceState = {
  items: [],
  status: Status.LOADING, // loading | success | error
}

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setPizzaItems(state, action: PayloadAction<Pizza[]>) {
      state.items = action.payload
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = Status.LOADING
      state.items = []
    })
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload
      state.status = Status.SUCCESS
    })
    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.status = Status.ERROR
      state.items = []
    })
  },

  // Варіант без TypeScript

  // extraReducers: {
  //   [fetchPizzas.pending]: (state) => {
  //     state.status = "loading"
  //     state.items = []
  //   },
  //   [fetchPizzas.fulfilled]: (state, action) => {
  //     state.items = action.payload
  //     state.status = "success"
  //   },
  //   [fetchPizzas.rejected]: (state, action) => {
  //     state.status = "error"
  //     state.items = []
  //   },
  // },
})

export const selectPizzaData = (state: RootState) => state.pizza

export const { setPizzaItems } = pizzaSlice.actions

export default pizzaSlice.reducer
