import { API_URL } from '@/constants';
import axios from 'axios';

// apiResponse function:
export const apiResponse = (success, message, data) => {
  return {
    success: success,
    message: message,
    data: data,
  };
}

// axiosRequest function:
export const axiosRequest = (setLoading) => {
  // Create Axios instance with base URL
  const api = axios.create({
    baseURL: API_URL,
  });

  // Request interceptor:
  api.interceptors.request.use(async (config) => {
    // Set loading state if setLoading function is provided
    if (setLoading) {
      setLoading(true);
    }

    // Uncomment and implement token logic if needed
    // const token = ""; // Retrieve token from storage
    // if (token) {
    //   config.headers = {
    //     Authorization: `Bearer ${token}`,
    //   };
    // }

    return config;
  });

  // Response interceptor:
  api.interceptors.response.use(
    (response) => {
      // Set loading state to false if setLoading function is provided
      if (setLoading) {
        setLoading(false);
      }
      return response;
    },
    (error) => {
      // Set loading state to false if setLoading function is provided
      if (setLoading) {
        setLoading(false);
      }
      return Promise.reject(error);
    }
  );

  return api;
}