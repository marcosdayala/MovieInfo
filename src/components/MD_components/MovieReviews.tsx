import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fecthMovieReviews } from "../../slices/MovieDetailSlices";

const MovieReviews = ({ movieId }: { movieId: string | undefined }) => {
  const language = useAppSelector(state => state.dataLanguage.language)
  const loading = useAppSelector(state => state.dataLoading.loading)
  let movieReviews = useAppSelector(state => state.dataMovie.reviews)
  const dispatch = useAppDispatch();

  useEffect(() => {
    const movieIdNumber = Number(movieId)
    dispatch(fecthMovieReviews({ id: movieIdNumber, language: language }))
  }, [language])

  const { REACT_APP_AVATAR_REVIEW_URL } = process.env;

  if (movieReviews.length === 0) {
    return (
      <div className='container_back'>
        <div className='container margin_container'>
          <div className='reviews_container'>
            {
              loading ?
              <></>
              :
              <h3 className='review'>
                {
                  language === 'US'? 
                  'here are no reviews about this movie yet 😕' 
                  : 
                  'Aún no hay opiniones sobre esta película 😕' 
                }
              </h3>
            }
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <div className='container_back'>
      <div className='container margin_container'>
        <h3 className='subtitule'>{ language === 'US'? 'Reviews of the people' : 'Opiniones de la comunidad'}</h3>
        <div className='reviews_container'>
          {
            movieReviews.map(review => {
              let reviewDate = review.created_at.substring(0, 10)
              let reviewContent = review.content.substring(0, 300)
              let reviewImg = review.author_details.avatar_path
              return (
                <div className='review' key={review.id}>
                  <img className='img_review' src={`${REACT_APP_AVATAR_REVIEW_URL}${reviewImg}`} alt={`Photo of ${review.author}`} />
                  <div className='info_review'>
                    <div className='first_info'>
                      <div className='second_info'>
                        <h3 className='author'>{review.author}</h3>
                        <h4 className='date'>{reviewDate}</h4>
                      </div>
                      <div className='rating'>{`${review.author_details.rating? review.author_details.rating : 'NR'} / 10`}</div>
                    </div>
                    <p className='overwiew_p rev'><span className='opacity'>{`${reviewContent}... `}</span><a className='link_review' href={review.url} target='_blank'>{ language === 'US'? 'See full review' : 'Mirar opinión completa'}</a></p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default MovieReviews