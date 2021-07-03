import {
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import basketReducer from 'store/slices/basketSlices';
import productReducer from 'store/slices/productSlices';
import companiesReducer from 'store/slices/companiesSlices';
import tagsReducer from 'store/slices/tagsSlices';

import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = configureStore({
  reducer: {
    basket: basketReducer,
    products: productReducer,
    companies: companiesReducer,
    tags: tagsReducer,
  },
  middleware: [
    ...getDefaultMiddleware({ thunk: false }),
    ...middlewares,
  ],
});

sagaMiddleware.run(sagas);

export default store;
