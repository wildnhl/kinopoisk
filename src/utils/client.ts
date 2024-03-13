import axios from 'axios';

export const client = axios.create({
  baseURL: 'http://www.omdbapi.com',
  timeout: 1000
});

// export const setAccessTokenCLient = (token: string) => {
//   if (!token) return;
//   // if (!token || isTokenExpired(token)) return;
//   client.defaults.headers.common['x-api-key'] =
//     'c391646a-c25d-4b66-91a2-5053ead80f9a';
// };
