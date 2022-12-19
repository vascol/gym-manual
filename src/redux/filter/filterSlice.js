import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  searchValue: "",
  categoryId: 0,
  sort: {
    name: "популярністю",
    sortProperty: "rating",
  },
  currentPage: 1,
}

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload
    },
    setCategoryId(state, action) {
      state.categoryId = action.payload
    },
    setSort(state, action) {
      state.sort = action.payload
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload
    },
  },
})

export const { setSearchValue, setCategoryId, setSort, setCurrentPage } =
  filterSlice.actions

export default filterSlice.reducer
