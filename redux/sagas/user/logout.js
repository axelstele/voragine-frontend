import {
  all, call, takeLatest, put,
} from 'redux-saga/effects';
import { user } from 'redux/reducers/user';
import { global } from 'redux/reducers/global';
import { logOut } from 'endpoints/user';
import Router from 'next/router';
import { LOGIN_PATHNAME } from 'utils/constants/pathnames';
import { SESSION_STORAGE_TOKEN, SESSION_STORAGE_REFRESH_TOKEN } from 'utils/constants/global';

function* callLogOut() {
  try {
    yield put(global.showLoader());
    yield call(logOut);
    sessionStorage.removeItem(SESSION_STORAGE_TOKEN);
    sessionStorage.removeItem(SESSION_STORAGE_REFRESH_TOKEN);
    yield call(Router.push, LOGIN_PATHNAME);
  } catch {
    // TODO handle error
  }
  yield put(global.hideLoader());
}

export default function* watchLogOut() {
  yield all([takeLatest(user.logOut.type, callLogOut)]);
}
