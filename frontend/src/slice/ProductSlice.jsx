import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const productsApi = createAsyncThunk(
  "products/fetching",
  async () => {
    const { data } = await axios.get(
      "https://dummyjson.com/products"
    );

    return data.products;
  }
);

const ProductSlice = createSlice({
  name: "products",

  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(productsApi.pending, (state) => {
        state.loading = true;
      })

      .addCase(productsApi.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })

      .addCase(productsApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default ProductSlice.reducer;