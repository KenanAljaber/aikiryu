import axios from 'axios';
import { CONSTANTS } from '../utils/constants';
import { InfoType } from '../components/infoMessage/infoMessage';

let axiosInstance = null;

export default {
  getInstance,
  initializeInterceptor
}

function getInstance() {
  if (!axiosInstance) {
    return null;
  }
  return axiosInstance;
}

function initializeInterceptor(showLoading, hideLoading, showToast) {
  if (axiosInstance) return;
  axiosInstance = axios.create();

  axiosInstance.interceptors.request.use(
    config => {
      const token = localStorage.getItem(CONSTANTS.TOKEN)
      //'Authorization': 'Bearer ' + localStorage.getItem(CONSTANTS.TOKEN)
      if (token) {
        config.headers["Authorization"] = "Bearer " + token;
      }
      showLoading();
      // console.log('passed the interceptor req');
      return config;
    },
    error => {
      // console.log('passed the interceptor error ');
      hideLoading();
      console.log(error);
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    response => {
      setTimeout(() => {
        hideLoading();
      }, 1000);
      // console.log('passed the interceptor response ');
      return response;
    },
    error => {
      setTimeout(() => {
        hideLoading();
      }, 1000);
      console.log(`error: ${error.message}`);
      if (error.response && error.response.status === 302) {
        // Redirect to login page
        showToast("Session expire", InfoType.ERROR);
        setTimeout(() => {
          localStorage.clear();
          window.location.href = '/login';
        }, 3000);
      }
      return Promise.reject(error);
    }
  );
}
