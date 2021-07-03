import {
  companiesRequested,
  companiesReceived,
  companiesFailed,
} from './slices/companiesSlices';

import {
  productsRequested,
  productsReceived,
  initFilters,
  productsFailed,
} from './slices/productSlices';

import {
  tagsRequested,
  tagsReceived,
  tagsFailed,
} from './slices/tagsSlices';
import {
  all,
  put,
  select,
  call,
  takeEvery,
} from 'redux-saga/effects';
import companiesAPI from 'services/companiesAPI';
import tagsAPI from 'services/tagsAPI';
import productsAPI from 'services/productAPI';
import { toast } from 'react-toastify';

function safeSaga(func, onError) {
  return function* () {
    try {
      yield* func();
    } catch (error) {
      yield put(onError());
      toast.error(error.message || 'An error occurred');
    }
  };
}

function* fetchProducts() {
  yield put(productsRequested());
  const state = yield select((state) => state);
  const [totalCount, products] = yield call(
    productsAPI.fetchAll,
    state,
  );
  yield put(productsReceived({ products, totalCount }));
}

function* watchInitFilters() {
  yield takeEvery(
    initFilters().type,
    safeSaga(fetchProducts, productsFailed),
  );
}

function* fetchCompanies() {
  const companies = yield call(companiesAPI.fetchAll);
  yield put(companiesReceived(companies));
}

function* watchFetchCompanies() {
  yield takeEvery(
    companiesRequested().type,
    safeSaga(fetchCompanies, companiesFailed),
  );
}

function* fetchTags() {
  const tags = yield call(tagsAPI.fetchAll);
  yield put(tagsReceived(tags));
}

function* watchFetchTags() {
  yield takeEvery(
    tagsRequested().type,
    safeSaga(fetchTags, tagsFailed),
  );
}

export default function* rootSagas() {
  yield all([
    watchInitFilters(),
    watchFetchCompanies(),
    watchFetchTags(),
  ]);
}
