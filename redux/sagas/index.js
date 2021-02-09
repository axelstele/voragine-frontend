import { all, fork } from 'redux-saga/effects';
import userSagas from './user';
import productsSagas from './products';

export default function* rootSaga() {
  yield all([
    fork(userSagas),
    fork(productsSagas),
  ]);
}
