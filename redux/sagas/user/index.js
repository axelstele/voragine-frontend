import { all, fork } from 'redux-saga/effects';
import watchLogIn from './login';
import watchRefreshToken from './refresh-token';
import watchLogOut from './logout';

export default function* userSagas() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchRefreshToken),
  ]);
}
