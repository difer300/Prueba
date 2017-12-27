import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const { REACT_APP_API_BASE = '' } = process.env;

export const getRules = () => {
  return axios.get(`${REACT_APP_API_BASE}/api/rule`);
};
