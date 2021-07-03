import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
  name: 'product',
  initialState: {
    isLoading: false,
    sort: '',
    brandFilters: [],
    tagFilters: [],
    itemType: 'mug',
    items: [],
    totalCount: 0,
    page: 1,
  },
  reducers: {
    initFilters(state, { payload }) {
      let page = payload.page;
      page = page > 1 ? page : 1;
      state.page = page;

      state.sort = payload.sort;
      state.brandFilters = payload.brands;
      state.tagFilters = payload.tags;
      state.itemType = payload.itemType;
    },
    productsRequested(state) {
      state.isLoading = true;
    },
    productsReceived(state, action) {
      state.isLoading = false;
      state.items = action.payload.products;
      state.totalCount = parseInt(action.payload.totalCount);
    },
    productsFailed(state) {
      state.isLoading = false;
    },
  },
});

export const {
  initFilters,
  productsRequested,
  productsReceived,
  productsFailed,
} = basketSlice.actions;

export const productsSelector = (state) => state.products.items;
export const loadingSelector = (state) => state.products.isLoading;
export const itemTypeSelector = (state) => state.products.itemType;
export const sortSelector = (state) => state.products.sort;
export const brandSelector = (state) => state.products.brandFilters;
export const tagSelector = (state) => state.products.tagFilters;
export const totalCountSelector = (state) =>
  state.products.totalCount;

export default basketSlice.reducer;
