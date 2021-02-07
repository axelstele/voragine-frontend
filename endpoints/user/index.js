import axios from 'axios-config';

const logIn = ({ email, password }) => axios.post('/login', {
  email,
  password,
});

export default logIn;
