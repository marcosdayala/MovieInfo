import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { useEffect } from "react";
import { fecthMovieDetails } from "../../slices/dataSlicesMovie";
import StarsRanking from "./StarsRanking";

const MovieInfo = ({ movieId }: { movieId: string | undefined }) => {
  
  const movie = useAppSelector(state => state.dataMovie.movie)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fecthMovieDetails(Number(movieId)))
  }, [])

  const { REACT_APP_IMAGE_URL } = process.env;

  return (
    <div className='movie_container'>
      <img src={`${REACT_APP_IMAGE_URL}${movie.backdrop_path}`} className='img_back' />
        <div className='container movieAll_container'>
          <div className='img_container'>
            <img className='movieImg' src={`${REACT_APP_IMAGE_URL}${movie.poster_path}`} alt={`Poster of ${movie.title}`} />
          </div>
          <div className='movieInfo_container'>
            <div className='title_genre_container'>
              <div className='title_container'>
                <h2 className='tituleMovie'>{movie.title}</h2>
                <div className='relase_ranking_container'>
                  <h4 className="relase">{`(${movie.release_date})`}</h4>
                  <StarsRanking vote_average={ movie.vote_average } />
                </div>
              </div>
              <ul className='genres_container'>
                {movie.genres.map(ele => {
                  return <li className='genre' key={ele.id}>{ele.name}</li>
                })}
              </ul>
            </div>
            <div className="overwiew_container">
              <h3 className='overwiew'>Overview</h3>
              <p className='overwiew_p'>{`${movie.overview}`}</p>
          </div>
          <a href={`${movie.link}`} target='_blank' className='button_watch'>Watch</a>
        </div>
      </div>
    </div>
  );
}

export default MovieInfo