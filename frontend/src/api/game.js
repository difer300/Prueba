import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const { REACT_APP_API_BASE = '' } = process.env;

export const createGame = game => {
  return axios.post(`${REACT_APP_API_BASE}/api/game`, game);
};

export const updateGame = game => {
  return axios.put(`${REACT_APP_API_BASE}/api/game`, game);
};

export const getAllGames = () => {
  return axios.get(`${REACT_APP_API_BASE}/api/game`);
};
