import { client } from '../utils/client';

export type ParamsSearch = {
  s: string;
  page?: number;
  type?: string;
};

export async function fetchSearchMovies(params: ParamsSearch) {
  const { data } = await client.get('', { params });
  return data;
}
