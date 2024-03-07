import { client } from '../utils/client';

export async function fetchSingleMovie(id: number) {
  // const response = await client.get('movie/random');
  // // if (!response.statusText) return response;
  // return response;
  const options = {
    method: 'GET',
    headers: {
      'X-API-KEY': 'c391646a-c25d-4b66-91a2-5053ead80f9a',
      'Content-Type': 'application/json'
    }
  };
  return fetch(
    `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`,
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
}
