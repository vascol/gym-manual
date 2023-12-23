import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"
import { fetchPosts } from "./asyncActions"
import { Post, PostSliceState, Status } from "./postSliceTypes"

const initialState: PostSliceState = {
  items: [],
  status: Status.LOADING, // loading | success | error
}

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setPostItems(state, action: PayloadAction<Post[]>) {
      state.items = action.payload
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.status = Status.LOADING
      state.items = []
    })
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.items = action.payload
      state.status = Status.SUCCESS
    })
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.status = Status.ERROR
      state.items = []
    })
  },
})

export const selectPostData = (state: RootState) => state.post

export const { setPostItems } = pizzaSlice.actions

export default pizzaSlice.reducer
