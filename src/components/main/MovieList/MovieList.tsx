import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { fetchSingleMovieThunk } from '../../../redux/single-movie-slice';
import { fetchSearchMoviesThunk } from '../../../redux/search-movies-slice';

export function MovieList() {
  const dispatch = useAppDispatch();
  const movie = useAppSelector((state) => state.singleMovie.movieData);
  useEffect(() => {
    dispatch(fetchSingleMovieThunk('tt0903747'));
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchSearchMoviesThunk('Batman'));
  }, [dispatch]);
  if (movie === null) {
    return <div>Loading...</div>;
  }
  return <div>{movie.Title}</div>;
}
