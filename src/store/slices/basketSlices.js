import { createSlice, createSelector } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    items: [],
  },
  reducers: {
    addProduct: (state, action) => {
      var product = state.items.find((item) =>
        item.slug.includes(action.payload.slug),
      );
      if (product) {
        state.items = state.items.map((item) => {
          if (item.slug.includes(action.payload.slug)) {
            item.quantity += 1;
          }
          return item;
        });
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeProduct: (state, { id }) => {
      const filteredProducts = state.items.filter(
        (product) => product.id !== id,
      );

      state.items = filteredProducts;
    },
    increaseQuantity: (state, action) => {
      const slug = action.payload;
      const productIndex = state.items.findIndex(
        (product) => product.slug === slug,
      );
      if (productIndex > -1) {
        state.items[productIndex].quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const slug = action.payload;
      const productIndex = state.items.findIndex(
        (product) => product.slug === slug,
      );
      if (productIndex > -1) {
        if (state.items[productIndex].quantity > 1) {
          state.items[productIndex].quantity -= 1;
        } else {
          console.log('else girdi');
          state.items.splice(productIndex, 1);
        }
      }
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
export const {
  addProduct,
  removeProduct,
  increaseQuantity,
  decreaseQuantity,
} = basketSlice.actions;

export const productsSelector = (state) => state.basket.items;

export const getTotalAmount = createSelector(
  productsSelector,
  (items) =>
    items.reduce(
      (subTotal, item) => item.price * item.quantity + subTotal,
      0,
    ),
);

export default basketSlice.reducer;
