/* eslint-disable import/no-named-as-default */
import { combineReducers } from 'redux';
import global from './global';
import products from './products';
import user from './user';

const store = combineReducers({
  global,
  products,
  user,
});

export default store;
