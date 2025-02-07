import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth API
export const auth = {
  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    const { token } = response.data;
    localStorage.setItem('token', token);
    return response.data;
  },
  
  signup: async (name: string, email: string, password: string) => {
    const response = await api.post('/auth/signup', { name, email, password });
    return response.data;
  },
  
  logout: () => {
    localStorage.removeItem('token');
  },
};

// Internships API
export const internships = {
  getAll: async () => {
    const response = await api.get('/internships');
    return response.data;
  },
  
  enroll: async (internshipId: number) => {
    const response = await api.post(`/internships/${internshipId}/enroll`);
    return response.data;
  },
};

// Payment API
export const payments = {
  createPaymentIntent: async (amount: number) => {
    const response = await api.post('/create-payment-intent', { amount });
    return response.data;
  },
};