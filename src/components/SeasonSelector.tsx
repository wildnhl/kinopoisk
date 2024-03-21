import { useState, ChangeEvent, useEffect } from 'react';
import type { ISingleMovie } from '../types/types';
import type { Episode } from '../types/interfaces';
import { fetchSeason } from '../redux/seasons-episodes-slice';
import { useAppDispatch, useAppSelector } from '../redux/store';

export function SeasonSelector(props: ISingleMovie) {
  const dispatch = useAppDispatch();
  const [seasonValue, setSeasonValue] = useState('1');
  const [episodeValue, setEpisodeValue] = useState('1');
  const season = useAppSelector((state) => state.seasons.season);

  const handleChangeSeason = (event: ChangeEvent<HTMLSelectElement>) => {
    setSeasonValue(event.target.value);
    setEpisodeValue('1');
  };
  const handleChangeEpisode = (event: ChangeEvent<HTMLSelectElement>) => {
    setEpisodeValue(event.target.value);
  };
  let seasons;
  if (season) {
    seasons = Array(Number(season.totalSeasons)).fill('.');
  }
  useEffect(() => {
    dispatch(
      fetchSeason({
        i: props.imdbID,
        Season: seasonValue,
        Episode: episodeValue
      })
    );
  }, [dispatch, seasonValue, episodeValue, props.imdbID]);
  return (
    <form className="d-flex">
      <select
        onChange={handleChangeSeason}
        style={{ width: 'fit-content' }}
        className="form-select"
        value={seasonValue}
      >
        {seasons &&
          seasons.map((_, i) => (
            <option key={i} value={i + 1}>
              Season {i + 1}
            </option>
          ))}
      </select>
      <select
        onChange={handleChangeEpisode}
        style={{ width: 'fit-content' }}
        className="form-select"
        value={episodeValue}
      >
        {season &&
          season.Episodes.map((el: Episode, index: number) => (
            <option key={index} value={el.Episode}>
              Ep. {el.Episode} - {el.Title}
            </option>
          ))}
      </select>
    </form>
  );
}
