import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fecthMovieSimilar } from "../../slices/dataSlicesMovie";
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperButtonNext, SwiperButtonPrev } from "./SwipersButtons";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import 'swiper/css';

export default function MovieSimilar({ movieId }: { movieId: string | undefined }) {
  const language = useAppSelector(state => state.dataLanguage.language)
  const movieSimilar = useAppSelector(state => state.dataMovie.similar)
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    const movieIdNumber = Number(movieId)
    dispatch(fecthMovieSimilar({ id: movieIdNumber, language: language }))
  }, [language])

  return (
    <div className='container_back similar'>
      <div className='container margin_container all_similar_container'>
        <h3 className='subtitule'>{ language === 'US'? 'Recommendation' : 'Recomendación'}</h3>
          <Swiper
            id="main"
            navigation
            spaceBetween={30}
            breakpoints={{
              377: {
                width: 377,
                slidesPerView: 1.5
              },
              747: {
                width: 747,
                slidesPerView: 3
              },
              1000: {
                width: 1000,
                slidesPerView: 4
              }
            }}
          >
            {
              movieSimilar.map(movie => {
                if (movie.poster_path === null) {
                  return <></>
                }
                return (
                  <SwiperSlide className='swiper_slide' key={movie.id}>
                    <a href={`/${movie.id}`}>
                      
                      <img className='similar_img' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`This movie is ${movie.title}`} />
                    </a>
                  </SwiperSlide>
                )
              })
            }
            <SwiperButtonNext><AiOutlineArrowRight /></SwiperButtonNext>
            <SwiperButtonPrev><AiOutlineArrowLeft /></SwiperButtonPrev>
          </Swiper>
      </div>
    </div>
  );
}