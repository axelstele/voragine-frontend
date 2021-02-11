import axios from 'axios';
import { DEVELOPMENT, SESSION_STORAGE_TOKEN } from 'utils/constants/global';
import getConfig from 'next/config';

const { publicRuntimeConfig: { apiHost, apiPort, apiServerURL } } = getConfig();

const instance = axios.create({
  baseURL: process.env.NODE_ENV === DEVELOPMENT ? `${apiHost}:${apiPort}` : apiServerURL,
});

instance.interceptors.request.use((config) => {
  const token = sessionStorage.getItem(SESSION_STORAGE_TOKEN);
  if (!token) {
    return config;
  }
  const newConfig = { ...config };
  newConfig.headers.Authorization = `Bearer ${token}`;
  return newConfig;
});

export default instance;
