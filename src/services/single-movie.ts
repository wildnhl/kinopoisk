import { client } from '../utils/client';

type ParamsById = {
  i: string | undefined;
  plot: string;
};

export async function fetchSingleMovie(params: ParamsById) {
  const { data } = await client.get('', { params });
  return data;
}
