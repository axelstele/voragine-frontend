import {
  all, call, takeLatest, put,
} from 'redux-saga/effects';
import { products } from 'redux/reducers/products';
import { global } from 'redux/reducers/global';
import get from 'endpoints/products';

function* callGet() {
  try {
    yield put(global.showLoader());
    const { data } = yield call(get);
    yield put(products.getSuccess(data));
  } catch {
    // TODO handle error
  }
  yield put(global.hideLoader());
}

export default function* watchGet() {
  yield all([takeLatest(products.get.type, callGet)]);
}
