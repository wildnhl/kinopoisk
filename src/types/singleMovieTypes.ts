export interface ISingleMovie {
  Actors: string;
  Awards: string;
  Country: string;
  DVD?: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production?: string;
  Rated: string;
  Ratings: Ratings[];
  Released: string;
  Response: string;
  Runtime: string;
  Title: string;
  Type: string;
  Website?: string;
  Writer: string;
  Year: string;
  totalSeasons?: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
  error: string | null;
  isLoading: boolean;
}

// export interface ISingleSeries {
//   Actors: string;
//   Awards: string;
//   Country: string;
//   Director: string;
//   Genre: string;
//   Language: string;
//   Metascore: string;
//   Plot: string;
//   Poster: string;
//   Rated: string;
//   Ratings: Ratings[];
//   Released: string;
//   Response: string;
//   Runtime: string;
//   Title: string;
//   Type: string;
//   Writer: string;
//   Year: string;
//   imdbID: string;
//   imdbRating: string;
//   imdbVotes: string;
//   totalSeasons: string | undefined;
// }

type Ratings = {
  Source: string;
  Value: string;
};

// export interface IErrorLoadingProps {
//   error: string | null;
//   isLoading: boolean;
// }
