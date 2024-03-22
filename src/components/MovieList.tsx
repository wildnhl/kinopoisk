import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../redux/store';
import { fetchSearchMoviesThunk } from '../redux/search-movies-slice';
import { MovieCard } from './MovieCard';
import style from '../styles/movieList.module.scss';

export function MovieList() {
  const dispatch = useAppDispatch();
  const { pageNumber } = useParams();

  const movie = useAppSelector((state) => state.searchMovies.moviesData);
  const error = useAppSelector((state) => state.searchMovies.error);
  const isLoading = useAppSelector((state) => state.searchMovies.isLoading);
  const searchValue = useAppSelector((state) => state.searchMovies.searchValue);
  const type = useAppSelector((state) => state.searchMovies.typeSearch);
  const year = useAppSelector((state) => state.searchMovies.yearSearch);

  useEffect(() => {
    dispatch(
      fetchSearchMoviesThunk({
        page: Number(pageNumber),
        search: searchValue
      })
    );
  }, [dispatch, pageNumber, searchValue, type, year]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.outerStyle}>
      {movie.map((el) => (
        <MovieCard
          key={el.imdbID}
          id={el.imdbID}
          Poster={el.Poster}
          Title={el.Title}
          type={el.Type}
        />
      ))}
    </div>
  );
}
