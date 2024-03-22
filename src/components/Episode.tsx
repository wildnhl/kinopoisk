import { useAppSelector } from '../redux/store';
import style from '../styles/episode.module.scss';

export function Episode() {
  const episode = useAppSelector((state) => state.seasons.episode);
  if (!episode)
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  return (
    <div className={style.outer}>
      <img
        className="rounded-4"
        src={episode.Poster}
        alt={episode.Title}
        style={{ width: '300px', height: '200px', objectFit: 'fill' }}
      />
      <div className="d-flex flex-column">
        <p>
          <i>Plot:</i> {episode.Plot}
        </p>
      </div>
    </div>
  );
}
