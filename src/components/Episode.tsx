import { useMemo } from 'react';
import { IEpisode } from '../types/singleMovieTypes';
import { useAppSelector } from '../redux/store';

export function Episode() {
  const episode = useAppSelector((state) => state.seasons.episode);
  const season = useAppSelector((state) => state.seasons.season);
  if (!episode) return <h2>episode null</h2>;
  return <div>{episode.Title}</div>;
}
