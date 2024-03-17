import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../redux/store';
import { fetchSearchMoviesThunk } from '../../../redux/search-movies-slice';
import { MovieCard } from '../MovieCard/MovieCard';
import cl from './MovieList.module.scss';

export function MovieList() {
  const dispatch = useAppDispatch();
  const { pageNumber } = useParams();

  const movie = useAppSelector((state) => state.searchMovies.moviesData);
  const error = useAppSelector((state) => state.searchMovies.error);
  const isLoading = useAppSelector((state) => state.searchMovies.isLoading);

  useEffect(() => {
    dispatch(
      fetchSearchMoviesThunk({
        page: pageNumber
      })
    );
  }, [dispatch, pageNumber]);

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
