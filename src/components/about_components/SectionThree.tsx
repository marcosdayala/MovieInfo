import { useAppSelector } from "../../app/hooks";
import reactLogo from "../../resources/about_logos/logo_react.svg";
import reduxLogo from "../../resources/about_logos/logo_redux.svg";
import typescriptLogo from "../../resources/about_logos/logo_TypeScript.svg";
import swiperLogo from "../../resources/about_logos/logo_swiper.svg";
import reactRouterLogo from "../../resources/about_logos/logo_react_router.svg";
import tmdbLogo from "../../resources/about_logos/logo_tmdb.svg";

const SectionThree = ({ widthScreen }: { widthScreen: number }) => {
  const language = useAppSelector(state => state.dataLanguage.language)

  if (widthScreen >= 1000) {
    return (
      <>
        <div className='container_back margin_container'>
          <div className='container section'>
            <div className='logos_container'>
              <p data-aos="fade-right" data-aos-offset="650" className='text_blue progress'>2 / 3</p>
              {
                language === 'US'?
                <h2 data-aos="fade-right" data-aos-offset="650" className='titule2 '>I used these <span className='text_blue'>technologies.</span></h2>
                :
                <h2 data-aos="fade-right" data-aos-offset="650" className='titule2 '>Utilicé estas <span className='text_blue'>tecnologías.</span></h2>
              }
              <div className='third_section_img'>
                <div data-aos="fade-up" className='logo_container react span_three'>
                  <p className='logo_text'>React</p>
                  <img className='logo_img react' src={reactLogo} alt="react logo" />
                </div>
                <div data-aos="fade-up" data-aos-delay="150" className='logo_container redux'>
                  <p className='logo_text'>Redux</p>
                  <img className='logo_img' src={reduxLogo} alt="redux logo" />
                </div>
                <div data-aos="fade-up" data-aos-delay="300" className='logo_container typescript span_two'>
                  <p className='logo_text'>TypeScript</p>
                  <img className='logo_img' src={typescriptLogo} alt="typeScript logo" />
                </div>
                <div data-aos="fade-up" data-aos-offset="650" data-aos-delay="450" className='logo_container swiper_logo'>
                  <p className='logo_text'>Swiper</p>
                  <img className='logo_img' src={swiperLogo} alt="swiper logo" />
                </div>
                <div data-aos="fade-up" data-aos-offset="650" data-aos-delay="600" className='logo_container react_router span_two'>
                  <p className='logo_text'>React Router</p>
                  <img className='logo_img' src={reactRouterLogo} alt="react router logo" />
                </div>
                <div data-aos="fade-up" data-aos-offset="650" data-aos-delay="750" className='logo_container tmdb span_three'>
                  <p className='logo_text'>Api The Movie DB</p>
                  <img className='logo_img' src={tmdbLogo} alt="the movie DB logo" />
                </div>
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
          <p data-aos="fade-right" className='text_blue progress'>2 / 3</p>
          {
            language === 'US'?
            <h2 data-aos="fade-right" className='titule2'>I used these technologies.</h2>
            :
            <h2 data-aos="fade-right" className='titule2'>Utilicé estas tecnologías.</h2>
          }
          <div className='third_section_img'>
              <div data-aos="fade-up" className='logo_container react'>
                <p className='logo_text'>React</p>
                <img className='logo_img react' src={reactLogo} alt="react logo" />
              </div>
              <div data-aos="fade-up" data-aos-delay="50" className='logo_container redux'>
                <p className='logo_text'>Redux</p>
                <img className='logo_img' src={reduxLogo} alt="redux logo" />
              </div>
              <div data-aos="fade-up" data-aos-delay="100" className='logo_container typescript'>
                <p className='logo_text'>TypeScript</p>
                <img className='logo_img' src={typescriptLogo} alt="typeScript logo" />
              </div>
              <div data-aos="fade-up" data-aos-delay="150" className='logo_container swiper_logo'>
                <p className='logo_text'>Swiper</p>
                <img className='logo_img' src={swiperLogo} alt="swiper logo" />
              </div>
              <div data-aos="fade-up" data-aos-offset="250" data-aos-delay="200" className='logo_container react_router'>
                <p className='logo_text'>React Router</p>
                <img className='logo_img' src={reactRouterLogo} alt="react router logo" />
              </div>
              <div data-aos="fade-up" data-aos-offset="250" data-aos-delay="250" className='logo_container tmdb'>
                <p className='logo_text'>Api The Movie DB</p>
                <img className='logo_img' src={tmdbLogo} alt="the movie DB logo" />
              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default SectionThree;