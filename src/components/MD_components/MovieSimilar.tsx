import { useEffect } from "react";
import { useParams } from "react-router";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fecthMovieSimilar } from "../../slices/dataSlicesMovie";

export default function MovieSimilar() {
  let { movieId } = useParams()

  const movieSimilar = useAppSelector(state => state.dataMovie.similar)
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(fecthMovieSimilar(Number(movieId)))
  }, [])

  return (
    <div className='container_back similar'>
      <div className='container margin_container all_similar_container'>
        <h3 className='subtitule'>Recommendations</h3>
        <div className='similar_movies'>
          {movieSimilar.map(movie => {
            return (
              <div className='similar_movie' key={movie.id}>
                <img className='similar_img' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='thor' />
                <h4 className='similar_titule'>{movie.original_title}</h4>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}