import MovieInfo from "./MD_components/MovieInfo";
import MovieReviews from "./MD_components/MovieReviews";
import '../styles_sheets/MovieDetails.css'
import MovieSimilar from "./MD_components/MovieSimilar";
import { useParams } from "react-router";

export default function MovieDetails() {
  let { movieId } = useParams()

  return (
    <>
      <MovieInfo movieId={movieId} />
      <MovieReviews movieId={movieId} />
      <MovieSimilar movieId={movieId} />
    </>
  );
}