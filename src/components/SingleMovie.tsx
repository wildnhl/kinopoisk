import { useAppSelector } from '../redux/store';
import { SeasonSelector } from './SeasonSelector';
import { Episode } from './Episode';
import cl from '../styles/singleMovie.module.scss';

export function SingleMovie() {
  const movie = useAppSelector((state) => state.singleMovie.movieData);
  const movieError = useAppSelector((state) => state.singleMovie.error);
  const movieIsLoading = useAppSelector((state) => state.singleMovie.isLoading);

  if (movieError) {
    return <div>Error: {movieError}</div>;
  }
  if (movieIsLoading || !movie) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={cl.outer}>
        <img className={cl.image} src={movie.Poster} alt={movie.Title} />
        <div>
          <p>{movie.Genre}</p>
          <h2 className={cl.title}>{movie.Title}</h2>
          <p className={cl.plot}>{movie.Plot}</p>
          <div className="d-flex gap-5 mt-5">
            <div className="d-flex flex-column gap-3">
              <p className={cl.infoTitle}>Year</p>
              <p className={cl.infoTitle}>Released</p>
              <p className={cl.infoTitle}>Country</p>
              <p className={cl.infoTitle}>Actors</p>
              <p className={cl.infoTitle}>Director</p>
              <p className={cl.infoTitle}>Writers</p>
            </div>
            <div className="d-flex flex-column gap-3">
              <p>{movie.Year}</p>
              <p>{movie.Released}</p>
              <p>{movie.Country}</p>
              <p>{movie.Actors}</p>
              <p>{movie.Director}</p>
              <p>{movie.Writer}</p>
            </div>
          </div>
        </div>
      </div>
      <SeasonSelector {...movie} />
      <Episode />
    </>
  );
}
