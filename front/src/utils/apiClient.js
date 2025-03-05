import axios from 'axios';

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_SERVER_API_URL, // Replace with your API base URL
  timeout: 10000, // Optional: request timeout in ms
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});