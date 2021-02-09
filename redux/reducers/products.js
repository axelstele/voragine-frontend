/* eslint-disable no-param-reassign */
import { createSlice, createAction } from '@reduxjs/toolkit';

const get = createAction('products/get');
const getSuccess = createAction('products/getSuccess');
const getError = createAction('products/getError');

export const products = {
  get,
  getSuccess,
  getError,
};

const slice = createSlice({
  name: 'products',
  initialState: {
    data: null,
  },
  reducers: {
    getSuccess: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export default slice.reducer;
