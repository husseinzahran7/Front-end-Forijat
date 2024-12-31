// local API Connection String
const API_BASE_URL = 'http://127.0.0.1:8000';

// const API_BASE_URL = 'https://kfwhnxzw-8000.euw.devtunnels.ms';

// Deployment API Connection String
// const API_BASE_URL = '';

// Define your API endpoints here
const API_ENDPOINTS = {
  
  // User
  login: `${API_BASE_URL}/api/auth/login/`,
  register: `${API_BASE_URL}/api/auth/register/`,

  getUser: `${API_BASE_URL}/api/users/me/`,

  forgotPassword: `${API_BASE_URL}/api/auth/request_password_reset/`,
  verifyResetCode: 'your-api-base-url/verify-reset-code',
  resetPassword: 'your-api-base-url/reset-password',

  getAllCases: `${API_BASE_URL}/api/cases/`,
  getCaseById:`${API_BASE_URL}/api/cases/`,
 
  donationApi: `${API_BASE_URL}/api/donations/`,
  

  
  // Add more endpoints as needed
};

export default API_ENDPOINTS;
