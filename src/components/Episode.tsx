import { useMemo } from 'react';
import { IEpisode } from '../types/singleMovieTypes';
import { useAppSelector } from '../redux/store';

export function Episode() {
  const episode = useAppSelector((state) => state.seasons.episode);

  if (!episode) return <h2>episode null</h2>;
  return <img src={episode.Poster} alt={episode.Title} />;
}
