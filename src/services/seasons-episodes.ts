import { client } from '../utils/client';

type ParamsSeasonsById = {
  i: string;
  Season: string;
  Episode?: string;
};
export async function fetchSeasonsOrEpisodes(params: ParamsSeasonsById) {
  const { data } = await client.get('', { params });
  return data;
}
