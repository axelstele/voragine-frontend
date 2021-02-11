import axios from 'axios-config';
import { SESSION_STORAGE_REFRESH_TOKEN } from 'utils/constants/global';

export const logIn = ({ email, password }) => axios.post('/login', {
  email,
  password,
});

export const logOut = () => {
  const refreshToken = sessionStorage.getItem(SESSION_STORAGE_REFRESH_TOKEN);
  return axios.post('/logout', {
    refreshToken,
  });
};

export const token = () => {
  const refreshToken = sessionStorage.getItem(SESSION_STORAGE_REFRESH_TOKEN);
  return axios.post('/token', {
    refreshToken,
  });
};
