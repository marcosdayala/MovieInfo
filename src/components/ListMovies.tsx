import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fecthMovies } from '../slices/dataSlices';
import '../styles_sheets/ListMovies.css'

export default function ListMovies() {
  const movies = useAppSelector(state => state.data.movies)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fecthMovies('popular'))
  }, [])

  const { REACT_APP_IMAGE_URL } = process.env;

  return (
    <div className='ListMovies_container'>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <a className='movie' href={`/${movie.id}`}>
              <img className='img_movie' src={`${REACT_APP_IMAGE_URL}${movie.poster_path}`} alt={movie.title} />
              <p className='movie_title'>{movie.title}</p>
            </a>
          </li>
        );
      })}
    </div>
  )
}