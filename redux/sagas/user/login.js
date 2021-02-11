import {
  all, call, takeLatest, put,
} from 'redux-saga/effects';
import { user } from 'redux/reducers/user';
import { global } from 'redux/reducers/global';
import { logIn } from 'endpoints/user';
import Router from 'next/router';
import { SESSION_STORAGE_TOKEN, SESSION_STORAGE_REFRESH_TOKEN } from 'utils/constants/global';

function* callLogIn({ payload }) {
  try {
    const { email, password } = payload;
    yield put(global.showLoader());
    const { data: { token, refreshToken } } = yield call(logIn, { email, password });
    sessionStorage.setItem(SESSION_STORAGE_TOKEN, token);
    sessionStorage.setItem(SESSION_STORAGE_REFRESH_TOKEN, refreshToken);
    yield call(Router.push, '/');
  } catch {
    // TODO handle error
  }
  yield put(global.hideLoader());
}

export default function* watchLogIn() {
  yield all([takeLatest(user.logIn.type, callLogIn)]);
}
