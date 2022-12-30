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
    setFilters(state, action) {
      if (Object.keys(action.payload).length) {
        state.currentPage = Number(action.payload.currentPage)
        state.categoryId = Number(action.payload.categoryId)
        state.sort = action.payload.sort
      } else {
        state.currentPage = 1
        state.categoryId = 0
        state.sort = {
          name: "популярністю",
          sortProperty: "rating",
        }
      }
    },
  },
})

export const {
  setSearchValue,
  setCategoryId,
  setSort,
  setCurrentPage,
  setFilters,
} = filterSlice.actions

export default filterSlice.reducer
