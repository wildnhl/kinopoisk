import { Link } from 'react-router-dom';
import cl from '../styles/MovieCard.module.scss';

type Movie = {
  Poster: string;
  Title: string;
  id: string;
};

export function MovieCard({ Poster, Title, id }: Movie) {
  return (
    <Link className={cl.link} to={`/movie/${id}`}>
      <img className={cl.image} src={Poster} alt={Title} />
      <p>{Title}</p>
    </Link>
  );
}
