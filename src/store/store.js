import { configureStore } from '@reduxjs/toolkit';
import basketReducer from 'store/slices/basketSlices';

export default configureStore({
  reducer: {
    basket: basketReducer,
  },
});
