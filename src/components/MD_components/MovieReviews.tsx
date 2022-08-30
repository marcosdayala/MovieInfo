import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fecthMovieReviews } from "../../slices/dataSlicesMovie";

const MovieReviews = ({ movieId }: { movieId: string | undefined }) => {

  let movieReviews = useAppSelector(state => state.dataMovie.reviews)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fecthMovieReviews(Number(movieId)))
  }, [])

  const { REACT_APP_AVATAR_REVIEW_URL } = process.env;
  
  return (
    <div className='container_back'>
      <div className='container margin_container'>
        <h3 className='subtitule'>Reviews of the people</h3>
        <div className='reviews_container'>
          {
            movieReviews.length !== 0?
            movieReviews.map(review => {
              let reviewDate = review.created_at.substring(0, 10)
              let reviewContent = review.content.substring(0, 300)
              let reviewImg = review.author_details.avatar_path
              return (
                <div className='review' key={review.id}>
                  <img className='img_review' src={`${REACT_APP_AVATAR_REVIEW_URL}${reviewImg}`} alt={`Photo of ${review.author}`} />
                  <div className='info_review'>
                    <div className='firts_info'>
                      <div className='second_info'>
                        <h3 className='author'>{review.author}</h3>
                        <h4 className='date'>{reviewDate}</h4>
                      </div>
                      <div className='rating'>{`${review.author_details.rating? review.author_details.rating : 'NR'} / 10`}</div>
                    </div>
                    <p className='overwiew_p'>{`${reviewContent}... `}<a className='link_review' href={review.url} target='_blank'>See full review</a></p>
                  </div>
                </div>
              )
            })
            :
            <h3 className='review'>T{`here are no reviews about this movie yet 😕`}</h3>
          }
        </div>
      </div>
    </div>
  );
}

export default MovieReviews