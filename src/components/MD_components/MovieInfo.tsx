import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { useEffect } from "react";
import { fecthMovieDetails } from "../../slices/dataSlicesMovie";
import { useParams } from "react-router";

const MovieInfo = () => {
  let { movieId } = useParams()
  
  const movie = useAppSelector(state => state.dataMovie.movie)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fecthMovieDetails(Number(movieId)))
  }, [])

  let imageUrl = 'https://image.tmdb.org/t/p/w500'

  let imageDiv = {
    backgroundImage: `url('${imageUrl}${movie.backdrop_path}')`,
  }  

  return (
    <div className='movie_container'>
      <div style={imageDiv} className='img_back' />
        <div className='container movieAll_container'>
          <div style={imageDiv} className='img_container'>
            <img className='movieImg' src={`${imageUrl}${movie.poster_path}`} alt={`Poster of ${movie.title}`} />
          </div>
          <div className='movieInfo_container'>
              <div className='title_container'>
                <h2 className='tituleMovie'>{movie.title}</h2>
                <div className='relase_ranking_container'>
                  <h4 className="relase">{`(${movie.release_date})`}</h4>
                  <h4 className='ranking'>{`★★★★ ${Math.round(movie.vote_average)}/10`}</h4>
                </div>
              </div>
              <ul className='genres_container'>
                {movie.genres.map(ele => {
                  return <li className='genre' key={ele.id}>{ele.name}</li>
                })}
              </ul>
            <div className="overwiew_container">
              <h3 className='overwiew'>Overview</h3>
              <p className='overwiew_p'>
                {
                  `${movie.overview}`
                }
              </p>
          </div>
          <a href={`${movie.link}`} target='_blank' className='button_watch'>Watch</a>
        </div>
      </div>
    </div>
  );
}

export default MovieInfo