import axios from 'axios';

const API_URL = 'http://localhost:4000/api';

export const getJobs = async () => {
  return await axios.get(`${API_URL}/jobs`);
};

export const getJobById = async (id) => {
  return await axios.get(`${API_URL}/jobs/${id}`);
};
