import axios from 'axios'
import { fecthLocation } from './fecthLocation'

const { REACT_APP_URL_KEY } = process.env;
const { REACT_APP_FECTH_URL } = process.env;
const { REACT_APP_LANGUAGE } = process.env;

export const fecthMoviesRes = async(typesOfMovies: string) => {
  try {
    const { data } = await axios.get(`${REACT_APP_FECTH_URL}${typesOfMovies}?api_key=${REACT_APP_URL_KEY}&language=${REACT_APP_LANGUAGE}&page=1`)    
    return data.results
  } catch (err) {
    console.log(err);
  }
}

export const fecthMoviesResDetail = async(movie_id: number) => {
  try {
    const { data } = await axios.get(`${REACT_APP_FECTH_URL}${movie_id}?api_key=${REACT_APP_URL_KEY}&language=${REACT_APP_LANGUAGE}`)
    const watch = await axios.get(`${REACT_APP_FECTH_URL}${movie_id}/watch/providers?api_key=${REACT_APP_URL_KEY}`)
    let watchResults = watch.data.results

    const countryCode = await fecthLocation()
    const watchResultsKeys = Object.keys(watchResults);
  
    let link;
    watchResultsKeys.map(ele => { ele == countryCode? link = watchResults[ele].link : link = watchResults['US'].link });
    
    const result = {
      data,
      link
    }

    return result
  } catch (err) {
    console.log(err);
  }
}

export const fecthMovieResReviews = async(movie_id: number) => {
  try {
    const { data } = await axios.get(`${REACT_APP_FECTH_URL}${movie_id}/reviews?api_key=${REACT_APP_URL_KEY}&language=${REACT_APP_LANGUAGE}`)
    let result = data.results.slice(0, 2)
    return result
  } catch (err) {
    console.log(err);
  }
}

export const fecthMovieResSimilar = async(movie_id: number) => {
  try {
    const { data } = await axios.get(`${REACT_APP_FECTH_URL}${movie_id}/recommendations?api_key=${REACT_APP_URL_KEY}&language=${REACT_APP_LANGUAGE}`)
    return data.results
  } catch (err) {
    console.log(err);
  }
}