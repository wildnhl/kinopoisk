import axios from 'axios';
// import { isTokenExpired } from './isTokenExpired';
export const client = axios.create({
  baseURL: 'https://kinopoiskapiunofficial.tech/',
  timeout: 1000
});

export const setAccessTokenCLient = (token: string) => {
  if (!token) return;
  // if (!token || isTokenExpired(token)) return;
  client.defaults.headers.common.Authorization =
    'c391646a-c25d-4b66-91a2-5053ead80f9a';
};