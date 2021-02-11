/* eslint-disable no-param-reassign */
import { createSlice, createAction } from '@reduxjs/toolkit';

const logIn = createAction('user/logIn');
const logInSuccess = createAction('user/logInSuccess');
const logInError = createAction('user/logInError');
const logOut = createAction('user/logOut');
const logOutSuccess = createAction('user/logOutSuccess');
const logOutError = createAction('user/logOutError');
const refreshToken = createAction('user/refreshToken');
const refreshTokenSuccess = createAction('user/refreshTokenSuccess');
const refreshTokenError = createAction('user/refreshTokenError');

export const user = {
  logIn,
  logInSuccess,
  logInError,
  logOut,
  logOutSuccess,
  logOutError,
  refreshToken,
  refreshTokenSuccess,
  refreshTokenError,
};

const slice = createSlice({
  name: 'user',
  initialState: {
    data: null,
  },
  reducers: {
    logInSuccess: (state, { payload }) => {
      state.data = payload;
    },
    logOutSuccess: (state) => {
      state.data = null;
    },
  },
});

export default slice.reducer;
