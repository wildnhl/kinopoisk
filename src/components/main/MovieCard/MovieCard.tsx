import { Link } from 'react-router-dom';

type Movie = {
  Poster: string;
  Title: string;
  Year: string;
  id: string;
};

export function MovieCard({ Poster, Title, Year, id }: Movie) {
  return (
    <Link to={`/movie/${id}`}>
      <img src={Poster} alt={Title} />
      <p>{Title}</p>
      <p>{Year}</p>
    </Link>
  );
}
