import { Link } from 'react-router-dom';
import style from '../styles/movieCard.module.scss';

type Movie = {
  Poster: string;
  Title: string;
  id: string;
  type: string;
};

export function MovieCard({ Poster, Title, id, type }: Movie) {
  return (
    <Link className={style.link} to={`/movie/${id}`}>
      <img className={style.image} src={Poster} alt={Title} />
      <p>{Title}</p>
      <p>{type}</p>
    </Link>
  );
}
