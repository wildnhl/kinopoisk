import { useState, ChangeEvent, useEffect } from 'react';
import type { ISingleMovie } from '../types/singleMovieTypes';
import { fetchSeason } from '../redux/seasons-episodes-slice';
import { useAppDispatch, useAppSelector } from '../redux/store';

export function SeasonSelector(props: ISingleMovie) {
  const dispatch = useAppDispatch();
  const [seasonValue, setSeasonValue] = useState('1');
  const [episodeValue, setEpisodeValue] = useState('1');
  const episode = useAppSelector((state) => state.seasons.episode);
  const season = useAppSelector((state) => state.seasons.season);
  const handleChangeSeason = (event: ChangeEvent<HTMLSelectElement>) => {
    setSeasonValue(event.target.value);
    setEpisodeValue('1');
  };
  const handleChangeEpisode = (event: ChangeEvent<HTMLSelectElement>) => {
    setEpisodeValue(event.target.value);
  };

  useEffect(() => {
    dispatch(
      fetchSeason({
        i: props.imdbID,
        Season: seasonValue,
        Episode: episodeValue
      })
    );
  }, [dispatch, seasonValue, episodeValue, props.imdbID]);
  console.log(season);
  console.log(episode);
  return (
    <form className="d-flex">
      <select
        onChange={handleChangeSeason}
        style={{ width: 'fit-content' }}
        className="form-select"
        value={seasonValue}
      >
        <option value="1">Season 1</option>
        <option value="2">Season 2</option>
        <option value="3">Season 3</option>
      </select>
      <select
        onChange={handleChangeEpisode}
        style={{ width: 'fit-content' }}
        className="form-select"
        value={episodeValue}
      >
        <option value="1">Episode 1</option>
        <option value="2">Episode 2</option>
        <option value="3">Episode 3</option>
      </select>
    </form>
  );
}
