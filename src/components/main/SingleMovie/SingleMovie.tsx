import cl from './singleMovie.module.scss';

export function SingleMovie({
  error,
  isLoading,
  Title,
  Actors,
  Country,
  Director,
  Genre,
  Metascore,
  Plot,
  Poster,
  Rated,
  Ratings,
  Released,
  Runtime,
  Type,
  Writer,
  Year,
  imdbID,
  imdbRating,
  imdbVotes
}: ISingleProps) {
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className={cl.outer}>
      <img className={cl.image} src={Poster} alt={Title} />
      <div>
        <p>{Genre}</p>
        <h2 className={cl.title}>{Title}</h2>
        <p className={cl.plot}>{Plot}</p>
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
            <p>{Year}</p>
            <p>{Released}</p>
            <p>{Country}</p>
            <p>{Actors}</p>
            <p>{Director}</p>
            <p>{Writer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
interface ISingleProps {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Country: string;
  Poster: string;
  Ratings: Ratings[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  totalSeasons?: string;
  error: string | null;
  isLoading: boolean;
}
type Ratings = {
  Source: string;
  Value: string;
};
