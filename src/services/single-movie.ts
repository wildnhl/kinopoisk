import { client } from '../utils/client';

export async function fetchSingleMovie(id: number) {
  const response = await client.get(`api/v2.2/films/${id}`);
  return response.data;
}
