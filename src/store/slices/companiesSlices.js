import { createSlice } from '@reduxjs/toolkit';

export const companiesSlice = createSlice({
  name: 'companies',
  initialState: {
    isLoading: false,
    companies: [],
  },
  reducers: {
    companiesRequested(state) {
      state.isLoading = true;
    },
    companiesReceived(state, action) {
      state.isLoading = false;
      state.companies = action.payload;
    },
  },
});

export const { companiesRequested, companiesReceived } =
  companiesSlice.actions;

export const companiesSelector = (state) => state.companies;

export default companiesSlice.reducer;
