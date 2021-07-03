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
    tagsFailed(state) {
      state.isLoading = false;
    },
  },
});

export const { tagsRequested, tagsReceived, tagsFailed } =
  tagsSlice.actions;

export const tagsSelector = (state) => state.tags;

export default tagsSlice.reducer;
