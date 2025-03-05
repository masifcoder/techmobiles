import axios from 'axios';
import store from '../redux/store';

// Create axios instance
const authApiClient = axios.create({
    baseURL: import.meta.env.VITE_SERVER_API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

// Add request interceptor to include token
authApiClient.interceptors.request.use(
    (config) => {
        const token = store.getState().authSlice.token;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default authApiClient; 