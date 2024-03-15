import { client } from '../utils/client';

type ParamsSearch = {
  s: string;
};

export async function fetchSearchMovies(params: ParamsSearch) {
  const { data } = await client.get('', { params });
  return data;
}
