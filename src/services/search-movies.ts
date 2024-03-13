import { client } from '../utils/client';

type ParamsSearch = {
  apikey: string;
  s: string;
};

export async function fetchSearchMovies(params: ParamsSearch) {
  const { data } = await client.get('', { params });
  return data;
}
