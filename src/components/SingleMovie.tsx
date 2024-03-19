import cl from '../styles/singleMovie.module.scss';
import type { ISingleMovie } from '../types/singleMovieTypes';

export function SingleMovie(props: ISingleMovie) {
  if (props.error) {
    return <div>Error: {props.error}</div>;
  }
  if (props.isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className={cl.outer}>
      <img className={cl.image} src={props.Poster} alt={props.Title} />
      <div>
        <p>{props.Genre}</p>
        <h2 className={cl.title}>{props.Title}</h2>
        <p className={cl.plot}>{props.Plot}</p>
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
            <p>{props.Year}</p>
            <p>{props.Released}</p>
            <p>{props.Country}</p>
            <p>{props.Actors}</p>
            <p>{props.Director}</p>
            <p>{props.Writer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
