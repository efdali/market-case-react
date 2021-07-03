import { createSlice } from '@reduxjs/toolkit';

export const tagsSlice = createSlice({
  name: 'tags',
  initialState: {
    isLoading: false,
    tags: [],
  },
  reducers: {
    tagsRequested(state) {
      state.isLoading = true;
    },
    tagsReceived(state, action) {
      state.isLoading = false;
      state.tags = action.payload;
    },
  },
});

export const { tagsRequested, tagsReceived } = tagsSlice.actions;

export const tagsSelector = (state) => state.tags;

export default tagsSlice.reducer;
