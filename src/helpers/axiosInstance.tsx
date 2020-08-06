import axios from 'axios';
import { BACKEND_URL, API_ACCESS_KEY } from '../config/settings';
const axiosInstance = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
    'XX-Auth-Token': API_ACCESS_KEY,
  },
  transformRequest: [
    (data, headers) => {
      // console.log('transformRequest');
      if (data) return JSON.stringify(data);
      return;
    },
  ],
  withCredentials: true,
  onUploadProgress: (progressEvent) => {
    const { loaded, total } = progressEvent;
    let percent = Math.floor((loaded * 100) / total);
    console.log(`${loaded}kb of ${total}kb | ${percent}%`);
  },
});

if (localStorage.authorization) {
  axiosInstance.defaults.headers.common[
    'authorization'
  ] = `Bearer ${localStorage.authorization}`;
}
axiosInstance.interceptors.request.use(
  (request) => {
    // console.log('interceptor request', request);
    // Edit request config
    return request;
  },
  (error) => {
    // console.error('interceptor request', error);
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  (response) => {
    // console.log('interceptor response', response);
    // Edit response config
    return response;
  },
  (error) => {
    // console.error('interceptor response', error);
    if (error.response) {
      // console.error(error.response);
      const { status } = error.response;
      if (status > 499) {
        console.log('Something went wrong!!!');
      }
    } else {
      console.log('Server not responding!!!');
    }
    return Promise.reject(error);
  }
);
export default axiosInstance;
