import axios from 'axios';
import DEVELOPMENT from 'utils/constants/global';
import getConfig from 'next/config';

const { publicRuntimeConfig: { apiHost, apiPort } } = getConfig();

const instance = axios.create({
  baseURL: process.env.NODE_ENV === DEVELOPMENT ? `${apiHost}:${apiPort}` : 'https://voragine-back.herokuapp.com',
});

export default instance;
