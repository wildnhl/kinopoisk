import { useAppSelector } from '../../../redux/store';
import { MovieCard } from '../MovieCard/MovieCard';
import cl from './MovieList.module.scss';

export function MovieList() {
  const movie = useAppSelector((state) => state.searchMovies.moviesData);
  const error = useAppSelector((state) => state.searchMovies.error);
  const isLoading = useAppSelector((state) => state.searchMovies.isLoading);
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ul className={cl.outerStyle}>
      {movie.map((el) => (
        <MovieCard
          key={el.imdbID}
          Poster={el.Poster}
          Title={el.Title}
          Year={el.Year}
          error={error}
          isLoading={isLoading}
        />
      ))}
    </ul>
  );
}
