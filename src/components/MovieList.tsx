import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../redux/store';
import { fetchSearchMoviesThunk } from '../redux/search-movies-slice';
import { MovieCard } from './MovieCard';
import cl from '../styles/movieList.module.scss';

export function MovieList() {
  const dispatch = useAppDispatch();
  const { pageNumber } = useParams();

  const movie = useAppSelector((state) => state.searchMovies.moviesData);
  const error = useAppSelector((state) => state.searchMovies.error);
  const isLoading = useAppSelector((state) => state.searchMovies.isLoading);
  const searchValue = useAppSelector((state) => state.searchMovies.searchValue);
  const typeValue = useAppSelector((state) => state.searchMovies.typeSearch);

  useEffect(() => {
    dispatch(
      fetchSearchMoviesThunk({
        page: Number(pageNumber),
        s: searchValue,
        type: typeValue
      })
    );
  }, [dispatch, pageNumber, searchValue, typeValue]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={cl.outerStyle}>
      {movie.map((el) => (
        <MovieCard
          key={el.imdbID}
          id={el.imdbID}
          Poster={el.Poster}
          Title={el.Title}
          error={error}
          isLoading={isLoading}
        />
      ))}
    </div>
  );
}
