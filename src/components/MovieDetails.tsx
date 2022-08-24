import { useEffect } from "react";
import { useParams } from "react-router";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { fecthMovieDetails } from "../slices/dataSlicesMovie";

export default function MovieDetails() {
  let { movieId } = useParams()
  const movie = useAppSelector(state => state.dataMovie)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fecthMovieDetails(Number(movieId)))
  }, [])

  return (
    <div className='movie_container'>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`Poster of ${movie.title}`} />
      <div className='movieInfo_container'>
        <h2>{`${movie.title} (${movie.release_date})`}</h2>
        <div>
          {movie.genres.map(ele => {
            return <h4 key={ele.id}>{ele.name}</h4>
          })}
        </div>
        <h3>{`Ranking ${Math.round(movie.vote_average)}/10`}</h3>
        <h4>Overview</h4>
        <p>
          {
            `${movie.overview}`
          }
        </p>
      </div>
    </div>
  );
}