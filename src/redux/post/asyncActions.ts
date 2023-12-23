import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { Post, SearchPostParams } from "./postSliceTypes"

export const fetchPosts = createAsyncThunk<Post[], SearchPostParams>(
  "post/fetchPostssStatus",
  async (params, thunkAPI) => {
    const apiKey = process.env.REACT_APP_MOCKAPI_KEY
    const { sortBy, order, category, search, currentPage } = params
    const { data } = await axios.get<Post[]>(
      `https://${apiKey}.mockapi.io/trainers?${category}&sortBy=${sortBy}&order=${order}${search}${currentPage}`
    )

    return data
  }
)
