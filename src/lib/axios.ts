import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://automate.dreamgen.online',
  headers: {
    'Content-Type': 'application/json',
  }
});

// Intercepteur pour gérer les erreurs globalement
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;

