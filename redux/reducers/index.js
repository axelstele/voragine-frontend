/* eslint-disable import/no-named-as-default */
import { combineReducers } from 'redux';
import global from './global';
import user from './user';

const store = combineReducers({
  global,
  user,
});

export default store;
