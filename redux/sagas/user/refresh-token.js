import {
  all, call, takeLatest,
} from 'redux-saga/effects';
import { user } from 'redux/reducers/user';
import { token } from 'endpoints/user';
import Router from 'next/router';
import { LOGIN_PATHNAME } from 'utils/constants/pathnames';
import { SESSION_STORAGE_TOKEN, SESSION_STORAGE_REFRESH_TOKEN } from 'utils/constants/global';

function* callRefreshToken() {
  try {
    const { data } = yield call(token);
    sessionStorage.setItem(SESSION_STORAGE_TOKEN, data.token);
  } catch (error) {
    sessionStorage.removeItem(SESSION_STORAGE_TOKEN);
    sessionStorage.removeItem(SESSION_STORAGE_REFRESH_TOKEN);
    yield call(Router.push, LOGIN_PATHNAME);
  }
}

export default function* watchRefreshToken() {
  yield all([takeLatest(user.refreshToken.type, callRefreshToken)]);
}
