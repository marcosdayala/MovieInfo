import axios from 'axios'

let fecthUrl = 'https://api.themoviedb.org/3/movie/'
let apiKey = '1298c9ce62ce8982cc2a5e519363c1e0'
let language = 'en-US'

export const fecthMoviesRes = async(typesOfMovies: string) => {
  try {
    const { data } = await axios.get(`${fecthUrl}${typesOfMovies}?api_key=${apiKey}&language=${language}&page=1`)    
    return data.results
  } catch (err) {
    console.log(err);
  }
}

export const fecthMoviesResDetail = async(movie_id: number) => {
  try {
    const { data } = await axios.get(`${fecthUrl}${movie_id}?api_key=${apiKey}&language=${language}`)
    const watch = await axios.get(`${fecthUrl}${movie_id}/watch/providers?api_key=${apiKey}`)
    let link = watch.data.results
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
    const { data } = await axios.get(`${fecthUrl}${movie_id}/reviews?api_key=${apiKey}&language=${language}`)
    let result = data.results.slice(0, 2)
    return result
  } catch (err) {
    console.log(err);
  }
}

export const fecthMovieResSimilar = async(movie_id: number) => {
  try {
    const { data } = await axios.get(`${fecthUrl}${movie_id}/recommendations?api_key=${apiKey}&language=${language}`)
    return data.results
  } catch (err) {
    console.log(err);
  }
}