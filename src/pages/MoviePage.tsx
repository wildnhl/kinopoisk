import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SingleMovie } from '../components/SingleMovie';
import { useAppDispatch } from '../redux/store';
import { fetchSingleMovieThunk } from '../redux/single-movie-slice';

export function MoviePage() {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSingleMovieThunk(String(id)));
  }, [dispatch, id]);

  return <SingleMovie />;
}
