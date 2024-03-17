import axios from 'axios';

export const client = axios.create({
  baseURL: 'http://www.omdbapi.com',
  timeout: 2000,
  params: {
    apikey: 'e27e767'
  }
});
