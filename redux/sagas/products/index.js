import { all, fork } from 'redux-saga/effects';
import watchGet from './get';

export default function* productsSagas() {
  yield all([
    fork(watchGet),
  ]);
}
