import {
  companiesRequested,
  companiesReceived,
} from './slices/companiesSlices';

import {
  productsRequested,
  productsReceived,
  initFilters,
} from './slices/productSlices';

import { tagsRequested, tagsReceived } from './slices/tagsSlices';
import {
  all,
  put,
  select,
  call,
  takeEvery,
  delay,
} from 'redux-saga/effects';
import companiesAPI from 'services/companiesAPI';
import tagsAPI from 'services/tagsAPI';
import productsAPI from 'services/productAPI';

// function* watchGetAllEnvironments() {
//   yield takeEvery(getAll().type, getAllEnvironments);
// }

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
  yield takeEvery(initFilters().type, fetchProducts);
}

function* fetchCompanies() {
  const companies = yield call(companiesAPI.fetchAll);
  yield put(companiesReceived(companies));
}

function* watchFetchCompanies() {
  yield takeEvery(companiesRequested().type, fetchCompanies);
}

function* fetchTags() {
  const tags = yield call(tagsAPI.fetchAll);
  yield put(tagsReceived(tags));
}

function* watchFetchTags() {
  yield takeEvery(tagsRequested().type, fetchTags);
}

export default function* rootSagas() {
  yield all([
    watchInitFilters(),
    watchFetchCompanies(),
    watchFetchTags(),
  ]);
}
