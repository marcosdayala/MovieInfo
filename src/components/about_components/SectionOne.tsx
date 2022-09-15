import movieHustle from "../../resources/about_movies/movie_hustle.jpg";
import movieSpiderman from "../../resources/about_movies/movie_spiderman.jpg";
import movieForrest from "../../resources/about_movies/movie_forrest.jpg";
import movieThor from "../../resources/about_movies/movie_thor.jpg";
import { useAppSelector } from "../../app/hooks";

const SectionOne = ({ widthScreen }: { widthScreen: number }) => {
  const language = useAppSelector(state => state.dataLanguage.language)

  if (widthScreen >= 1000) {
    return (
      <>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='container_back position'>
          <div className='container section one'>
            <div className='titule_container span'>
              {
                language === 'US'?
                <h1 className='titule'>Do you want to know <span className='text_blue'>how I made</span> this project?</h1>
                :
                <h1 className='titule'>¿Quieres saber <span className='text_blue'>cómo realizé</span> este proyecto?</h1>
              }
              <p className='text_small one'>{ language === 'US'? 'Follow me...' : 'Sígueme...' }</p>
            </div>
            <div className='first_section_img'>
              <img className='images' src={movieThor} alt='spiderman' />
              <img className='images' src={movieSpiderman} alt='spiderman' />
              <img className='images' src={movieHustle} alt='hustle' />
              <img className='images' src={movieForrest} alt='spiderman' />
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className='container_back position'>
        <div className='container section one'>
          <div data-aos="fade-up" className='first_section_img'>
            <div className='titule_container span'>
              {
                language === 'US'?
                <h1 className='titule'>Do you want to know <span className='text_blue'>how I made</span> this project?</h1>
                :
                <h1 className='titule'>¿Quieres saber <span className='text_blue'>cómo realizé</span> este proyecto?</h1>
              }
              <p className='text_small'>{ language === 'US'? 'Follow me...' : 'Sígueme...' }</p>
            </div>
            <img className='images' src={movieThor} alt='spiderman' />
            <img className='images' src={movieSpiderman} alt='spiderman' />
            <img className='images' src={movieHustle} alt='hustle' />
            <img className='images' src={movieForrest} alt='spiderman' />
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionOne;