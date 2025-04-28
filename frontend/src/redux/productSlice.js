import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  searchTerm: "",
}

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    },
    clearSearchTerm: (state) => {
      state.searchTerm = ""
    },
  },
})

export const { setSearchTerm, clearSearchTerm } = productSlice.actions

export default productSlice.reducer

