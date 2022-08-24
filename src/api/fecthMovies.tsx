import axios from 'axios'

export const fecthMoviesRes = async(typesOfMovies: string) => {
  try {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${typesOfMovies}?api_key=1298c9ce62ce8982cc2a5e519363c1e0&language=en-US&page=1`)    
    return data.results
  } catch (err) {
    console.log(err);
  }
}

export const fecthMoviesResDetail = async(movie_id: number) => {
  try {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=1298c9ce62ce8982cc2a5e519363c1e0&language=en-US`)
    return data
  } catch (err) {
    console.log(err);
  }
}