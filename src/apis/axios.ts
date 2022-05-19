import axios from 'axios';
import {API_KEY, BASE_URL} from '../config/config';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    'api-key': API_KEY,
  },
});

axiosInstance.interceptors.request.use(
  async config => config,
  error => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  response => response,
  error => Promise.reject(error),
);

export default axiosInstance;
