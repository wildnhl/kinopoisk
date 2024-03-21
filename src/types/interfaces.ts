export type Season = {
  Title: string;
  Season: string;
  totalSeasons: string;
  Episodes: Episode[];
  Response: string;
};

export type Episode = {
  Title: string;
  Released: string;
  Episode: string;
  imdbRating: string;
  imdbID: string;
};
