import {
  all, call, takeLatest, put,
} from 'redux-saga/effects';
import { products } from 'redux/reducers/products';
import { global } from 'redux/reducers/global';
import get from 'endpoints/products';
import { user } from 'redux/reducers/user';

function* callGet() {
  try {
    yield put(global.showLoader());
    const { data } = yield call(get);
    yield put(products.getSuccess(data));
  } catch ({ response: { status } }) {
    if (status === 401) {
      yield put(user.refreshToken());
    }
  }
  yield put(global.hideLoader());
}

export default function* watchGet() {
  yield all([takeLatest(products.get.type, callGet)]);
}
