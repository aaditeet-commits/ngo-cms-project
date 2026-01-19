import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/auth/';

const api = axios.create({
    baseURL: API_URL,
});

// Add token to requests if it exists
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const register = (userData) => api.post('register/', userData);
export const login = (credentials) => api.post('login/', credentials);
export const getProfile = () => api.get('profile/');
export const updateProfile = (userData) => api.put('profile/', userData);

export default api;