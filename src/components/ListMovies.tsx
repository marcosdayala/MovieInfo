import { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fecthMovies, fecthMoviesSearch } from '../slices/dataSlices';
import '../styles_sheets/ListMovies.css'

export default function ListMovies() {
  const movies = useAppSelector(state => state.data.movies)
  const language = useAppSelector(state => state.dataLanguage.language)
  const [page, setPage] = useState(1)
  const [searchText, setSearchText] = useState('')
  const [searchActive, setSearchActive] = useState(false)
  const dispatch = useAppDispatch()

  const { REACT_APP_IMAGE_URL } = process.env;

  useEffect(() => {
    if (!searchActive) {
      dispatch(fecthMovies(page.toString()))
    }
    else {
      dispatch(fecthMoviesSearch({
          characters: searchText,
          page: page.toString()
        }))
    }
  }, [searchText, page, language])

  const handlePage = (string: string) => {
    if (string === 'next' && page < 1000) setPage(page => page += 1);
    if (string === 'prev' && page > 1) setPage(page => page -= 1);
  }

  const handleList = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    if (searchActive) setPage(1)
    event.target.value === '' ? setSearchActive(false) : setSearchActive(true)
    setSearchText(event.target.value)
  }

  return (
    <div id='top' className='container_back list'>
      <div className='container margin_container all_list_container'>
        <input onChange={(e) => handleList(e)} type="text" className='input_movies' placeholder={ language === 'US'? 'Search for a movie...' : 'Introduce el nombre de una película...' } />
        <div className='ListMovies_container'>
          {
            movies.length === 0?
            <div className='container_no_found'>
              <h3 className='no_found'>{ language === 'US'? "Sorry, we couldn't find your movie... 😕" : 'Lo sentimos, no pudimos encontrar la película... 😕' }</h3>
            </div>
            :
            movies.map(movie => {
              if (movie.poster_path === null) {
                return <></>
              }
              let movieTitle = movie.title.substring(0, 41)
              return (
                <li className='movie_container_list' key={movie.id}>
                  <a className='movie' href={`/${movie.id}`}>
                    <img className='img_movie' src={`${REACT_APP_IMAGE_URL}${movie.poster_path}`} alt={movie.title} />
                    <div className='movie_title'>{movieTitle}</div>
                  </a>
                </li>
              );
            })
          }
        </div>
        <div className='buttons_container'>
          <a href='#top' onClick={() => handlePage('prev')} className='button'>{ language? 'Previous' : 'Anterior' }</a>
          <a href='#top' onClick={() => handlePage('next')} className='button'>{ language? 'Next' : 'Siguiente' }</a>
        </div>
      </div>
    </div>
  )
}