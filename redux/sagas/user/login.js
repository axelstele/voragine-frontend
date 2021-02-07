import {
  all, call, takeLatest, put,
} from 'redux-saga/effects';
import { user } from 'redux/reducers/user';
import { global } from 'redux/reducers/global';
import logIn from 'endpoints/user';
import Router from 'next/router';

function* callLogIn({ payload }) {
  try {
    const { email, password } = payload;
    yield put(global.showLoader());
    yield call(logIn, { email, password });
    yield call(Router.push, '/');
  } catch {
    // TODO handle error
  }
  yield put(global.hideLoader());
}

export default function* watchLogIn() {
  yield all([takeLatest(user.logIn.type, callLogIn)]);
}
