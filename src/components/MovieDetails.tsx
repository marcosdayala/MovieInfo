import MovieInfo from "./MD_components/MovieInfo";
import MovieReviews from "./MD_components/MovieReviews";
import '../styles_sheets/MovieDetails.css'
import MovieSimilar from "./MD_components/MovieSimilar";

export default function MovieDetails() {
  return (
    <>
      <MovieInfo />
      <MovieReviews />
      <MovieSimilar />
    </>
  );
}