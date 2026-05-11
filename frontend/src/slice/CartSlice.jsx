import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const cartData = createAsyncThunk("cart/fetch/", async () => {
  const { data } = await axios.get("http://localhost:8080/cart");
  return data;
});

let CartSlice = createSlice({
  name: "cart",

  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder

      .addCase(cartData.pending, (state) => {
        state.loading = true;
      })

      .addCase(cartData.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })

      .addCase(cartData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default CartSlice.reducer;
