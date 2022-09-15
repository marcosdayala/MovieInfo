import { useAppSelector } from "../../app/hooks"
import sketchMovie from "../../resources/about_sketch/sketch_movie.svg";
import sketchRecommendations from "../../resources/about_sketch/sketch_recommendations.svg";
import sketchReview from "../../resources/about_sketch/sketch_review.svg";

const SectionTwo = ({ widthScreen }: { widthScreen: number }) => {
  const language = useAppSelector(state => state.dataLanguage.language)

  if (widthScreen >= 1000) {
    return (
      <>
        <div className='container_back margin_container'>
          <div className='container section'>
            <div data-aos="fade-right" data-aos-offset="700" className='text_container'>
              <div>
                <p className='text_blue progress'>1 / 3</p>
                  {
                    language === 'US'?
                    <h2 className='titule2'>I started the layout in adobe XD, creating <span className='text_blue'>some sketches.</span></h2>
                    :
                    <h2 className='titule2'>Comencé la maquetación en adobe XD, creando <span className='text_blue'>algunos bocetos.</span></h2>
                  }
                </div>
                <p className='text_small'>{ language === 'US'? 'Once we had the visual part, the next step was the code.' : 'Al tener la parte visual, el próximo paso era el código.' }</p>
              </div>
            <div data-aos="fade-left" className='second_section_img'>
              <div className='container_second_img'>
                <img className='sketch_movie' src={sketchMovie} alt='sketch movie' />
                <img className='sketch_recommendations' src={sketchRecommendations} alt='sketch recommendations' />
                <img className='sketch_review' src={sketchReview} alt='sketch review' />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className='container_back'>
        <div className='container section'>
          <p data-aos="fade-up" data-aos-offset="450" className='text_blue progress'>1 / 3</p>
            {
              language === 'US'?
              <h2 data-aos="fade-up" data-aos-offset="450" className='titule2'>I started the layout in adobe XD, creating <span className='text_blue'>some sketches.</span></h2>
              :
              <h2 data-aos="fade-up" data-aos-offset="450" className='titule2'>Comencé la maquetación en adobe XD, creando <span className='text_blue'>algunos bocetos.</span></h2>
            }
          <div data-aos="fade-up" data-aos-offset="450" className='second_section_img'>
            <div className='container_second_img'>
              <img className='sketch_movie' src={sketchMovie} alt='sketch movie' />
              <img className='sketch_recommendations' src={sketchRecommendations} alt='sketch recommendations' />
              <img className='sketch_review' src={sketchReview} alt='sketch review' />
            </div>
          </div>
          <p className='text_small'>{ language === 'US'? 'Once we had the visual part, the next step was the code.' : 'Al tener la parte visual, el próximo paso era el código.' }</p>
        </div>
      </div>
    </>
  )
}

export default SectionTwo;