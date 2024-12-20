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
  
  getAllCases: `${API_BASE_URL}/api/cases/`,
  getCaseById:`${API_BASE_URL}/api/cases/`,
 

  
  // Add more endpoints as needed
};

export default API_ENDPOINTS;
