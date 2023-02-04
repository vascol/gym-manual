import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { Pizza, SearchPizzaParams } from "./pizzaSliceTypes"

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
