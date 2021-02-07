import { all, fork } from 'redux-saga/effects';
import watchLogIn from './login';

export default function* userSagas() {
  yield all([
    fork(watchLogIn),
  ]);
}
