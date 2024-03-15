type Movie = {
  Poster: string;
  Title: string;
  Year: string;
};

export function MovieCard({ Poster, Title, Year }: Movie) {
  return (
    <li>
      <img src={Poster} alt={Title} />
      <p>{Title}</p>
      <p>{Year}</p>
    </li>
  );
}
