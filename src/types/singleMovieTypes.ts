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

export interface IEpisode {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Season: string;
  Episode: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings?: [];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  seriesID: string;
  Type: string;
  Response: string;
}

type Ratings = {
  Source: string;
  Value: string;
};

export type Season = {
  Title: string;
  Season: string;
  totalSeasons: string;
  Episodes: Episode[];
  Response: string;
};

type Episode = {
  Title: string;
  Released: string;
  Episode: string;
  imdbRating: string;
  imdbID: string;
};
