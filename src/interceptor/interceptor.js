// axiosInstance.js
import axios from 'axios';
import { useBlockUi } from '../context/isLoadingContext';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  config => {
    const {showLoading, hideLoading} = useBlockUi();
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    showLoading();
    return config;
  },
  error => Promise.reject(error)
);

export default axiosInstance;
