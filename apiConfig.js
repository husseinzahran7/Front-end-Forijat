// local API Connection String
const API_BASE_URL = 'http://localhost:3500';

// Deployment API Connection String
// const API_BASE_URL = '';

// Define your API endpoints here
const API_ENDPOINTS = {
  
  // User
  loginUser: `${API_BASE_URL}/employee/employeeLogin`,

  
  
  // Admin
  adminLogin:`${API_BASE_URL}/admin/login/`,
  

  
  // Add more endpoints as needed
};

export default API_ENDPOINTS;
