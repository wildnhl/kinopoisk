import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { fetchSingleMovieThunk } from '../redux/single-movie-slice';
import { SingleMovie } from '../components/main/SingleMovie/SingleMovie';

export function MoviePage() {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const movie = useAppSelector((state) => state.singleMovie.movieData);
  const movieError = useAppSelector((state) => state.singleMovie.error);
  const movieIsLoading = useAppSelector((state) => state.singleMovie.isLoading);

  useEffect(() => {
    dispatch(fetchSingleMovieThunk(id));
  }, [dispatch, id]);
  return (
    <SingleMovie {...movie} error={movieError} isLoading={movieIsLoading} />
  );
}
