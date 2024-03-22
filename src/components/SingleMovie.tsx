import { useAppSelector } from '../redux/store';
import { SeasonSelector } from './SeasonSelector';
import { Episode } from './Episode';
import style from '../styles/singleMovie.module.scss';

export function SingleMovie() {
  const movie = useAppSelector((state) => state.singleMovie.movieData);
  const movieError = useAppSelector((state) => state.singleMovie.error);
  const movieIsLoading = useAppSelector((state) => state.singleMovie.isLoading);

  if (movieError) {
    return <div>Error: {movieError}</div>;
  }
  if (movieIsLoading || !movie) {
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <>
      <div className={style.outer}>
        <img className={style.image} src={movie.Poster} alt={movie.Title} />
        <div>
          <p>{movie.Genre}</p>
          <h2 className={style.title}>{movie.Title}</h2>
          <p className={style.plot}>{movie.Plot}</p>
          <div className="d-flex gap-5 mt-5">
            <div className="d-flex flex-column gap-3">
              <p className={style.infoTitle}>Year</p>
              <p className={style.infoTitle}>Released</p>
              <p className={style.infoTitle}>Country</p>
              <p className={style.infoTitle}>Actors</p>
              <p className={style.infoTitle}>Director</p>
              <p className={style.infoTitle}>Writers</p>
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
      {movie.totalSeasons && movie.totalSeasons !== 'N/A' && (
        <>
          <SeasonSelector {...movie} />
          <Episode />
        </>
      )}
    </>
  );
}
