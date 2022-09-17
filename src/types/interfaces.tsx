interface Movie {
  title: string
  poster_path: string
  id: number
}

export interface Movies {
  movies: Array<Movie>
}

interface Genre {
  id: number
  name: string
}

interface MovieDetails extends Movie {
  genres: Array<Genre>
  overview: string
  release_date: string
  vote_average: number
  backdrop_path: string | null
  link: string
}

interface avatar_path {
  avatar_path: string
  rating: string
}

interface MovieReview {
  author: string
  content: string
  id: string
  url: string
  created_at: string
  author_details: avatar_path
}

interface MovieSimilar {
  poster_path: string
  title: string
  id: string
}

export interface MovieDetailsAll {
  movie: MovieDetails
  reviews: Array<MovieReview>
  similar: Array<MovieSimilar>
}

export interface FecthSearch {
  characters: string
  page: string
}

export interface Language {
  language: string
}

export interface FecthLanguage {
  id: number
  language: string
}

export interface Loading {
  loading: boolean
}