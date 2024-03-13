import { client } from '../utils/client';

type ParamsById = {
  apikey: string;
  i: string;
};

export async function fetchSingleMovie(params: ParamsById) {
  const { data } = await client.get('', { params });
  return data;
}
