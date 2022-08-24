export interface Movie {
  title: string,
  poster_path: string,
  id: number,
}

export interface Movies {
  movies: Array<Movie>
}

export interface Genre {
  id: number,
  name: string
}

export interface MovieDetails extends Movie {
  genres: Array<Genre>,
  overview: string,
  release_date: string,
  vote_average: number,
}