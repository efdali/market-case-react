import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, { id }) => {
      const filteredProducts = state.products.filter(
        (product) => product.id !== id,
      );

      state.products = filteredProducts;
    },
    increaseQuantity: (state, { id }) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === id,
      );
      state.products[productIndex].quantity += 1;
    },
    decreaseQuantity: (state, { id }) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === id,
      );
      state.products[productIndex].quantity -= 1;
    },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct } = basketSlice.actions;

export default basketSlice.reducer;
