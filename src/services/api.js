import axios from 'axios';

const api = axios.create({
  baseURL: 'https://omnistack-backend-andre.herokuapp.com'
});

export default api;