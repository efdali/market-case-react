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
    changeSortValue(state, action) {
      state.sort = action.payload;
    },
    changeItemType(state, action) {
      if (state.itemType !== action.payload) {
        state.itemType = action.payload;
      }
    },
    setTotalCount(state, action) {
      state.totalCount = parseInt(action.payload);
    },
  },
});

export const {
  initFilters,
  productsRequested,
  productsReceived,
  changeSortValue,
  changeItemType,
  setTotalCount,
} = basketSlice.actions;

export const productsSelector = (state) => state.products.items;
export const itemTypeSelector = (state) => state.products.itemType;
export const sortSelector = (state) => state.products.sort;
export const brandSelector = (state) => state.products.brandFilters;
export const tagSelector = (state) => state.products.tagFilters;
export const totalCountSelector = (state) =>
  state.products.totalCount;

// export const fetchProducts = () => (dispatch, getState) => {
//   dispatch(productsRequested());
//   const { sort, brandFilters, tagFilters, page, itemType } =
//     getState().products;

//   const [sortValue, sortType] = sort.split('-');

//   let filterString = '';

//   if (brandFilters.length > 0) {
//     filterString +=
//       '&_manufacturer[]=' + brandFilters.join('&_manufacturer[]=');
//   }

//   if (tagFilters.length > 0) {
//     filterString += '&_tags[]=' + tagFilters.join('&_tags[]=');
//   }

//   fetch(
//     `${process.env.REACT_APP_API_BASE_URL}/items?_page=${page}&_limit=${PRODUCTS_PER_PAGE}&_sort=${sortValue}&_order=${sortType}&itemType=${itemType}${filterString}`,
//   )
//     .then((response) => {
//       dispatch(setTotalCount(response.headers.get('x-total-count')));
//       return response.json();
//     })
//     .then((response) => {
//       dispatch(productsReceived(response));
//     });
//   // const response = await usersAPI.fetchAll()
//   //   dispatch(productsReceived(response.data));
// };

export default basketSlice.reducer;
