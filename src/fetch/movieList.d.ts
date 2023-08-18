export interface Props {
  page: number;
}

export interface Response {
  Response: string;
  Search: Movie[];
  totalResult: number;
}

export type Movie = {
  Title: string;
  Year: number;
  imdbID: string;
  Type: TypeMovie;
  Poster: string;
};

export type TypeMovie = 'movie' | 'series' | 'episode';
