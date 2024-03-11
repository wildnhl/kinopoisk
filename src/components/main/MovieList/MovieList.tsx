import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { fetchSingleMovieThunk } from '../../../redux/single-movie-slice';

export function MovieList() {
  const dispatch = useAppDispatch();
  const movie = useAppSelector((state) => state.singleMovie.movieData);
  useEffect(() => {
    dispatch(fetchSingleMovieThunk(298));
  }, [dispatch]);
  if (movie === null) {
    return <div>Loading...</div>;
  }
  return <div>{movie.countries.map((el) => el.country)}</div>;
}
