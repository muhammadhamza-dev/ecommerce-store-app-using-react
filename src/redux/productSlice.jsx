// src/redux/productSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get('https://dummyjson.com/products');
    return response.data.products;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    filteredItems: [],
    status: 'idle',
    searchQuery: '',
  },
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
      state.filteredItems = state.items.filter((product) =>
        product.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
        state.filteredItems = action.payload;
      });
  },
});

export const { setSearchQuery } = productSlice.actions;
export default productSlice.reducer;
