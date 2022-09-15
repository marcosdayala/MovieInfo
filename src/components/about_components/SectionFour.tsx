import { useAppSelector } from "../../app/hooks";
import MarcosAyala from "../../resources/Foto_Perfil.jpg";
import { IoIosArrowUp } from 'react-icons/io';

const SectionFour = ({ widthScreen }: { widthScreen: number }) => {
  const language = useAppSelector(state => state.dataLanguage.language)

  if (widthScreen >= 1000) {
    return (
      <>
        <div className='container_back'>
          <div className='container section center position'>
            <div className='card' data-aos="fade-right" data-aos-offset="700">
                <div className='card_imgc'>
                  <img className='card_img' src={MarcosAyala} alt='Marcos Ayala' />
                </div>
                <div className='card_text'>
                  <h2 className='card_titule'>Marcos Ayala</h2>
                  <p className='card_subtitule'>Frontend Developer / Designer</p>
                </div>
                <a href='https://www.linkedin.com/in/marcosdayala-/' target='_blank' className='card_button'>{ language === 'US'? 'Contact' : 'Contactar' }</a>
            </div>
            <div className='text_container center'>
              <div data-aos="fade-left" data-aos-offset="650">
                <p className='text_blue progress'>3 / 3</p>
                <p className='text_small two'>{ language === 'US'? 'As a result...' : 'Como resultado...' }</p>
                  {
                    language === 'US'?
                    <h2 className='titule2'>Find the <span className='text_blue'>movie</span> you <span className='text_blue'>want.</span></h2>
                    :
                    <h2 className='titule2'>Encuentra la <span className='text_blue'>película</span> que <span className='text_blue'>quieras.</span></h2>
                  }
              </div>
            </div>
            <a data-aos="fade-up" data-aos-offset="5" href="#top" className='button_up'>
              <IoIosArrowUp />
            </a>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className='container_back margin_container'>
        <div className='container section position'>
          <p data-aos="fade-up" data-aos-offset="550" className='text_blue progress'>3 / 3</p>
          <div data-aos="fade-up" data-aos-offset="550">
            <p className='text_small two'>{ language === 'US'? 'As a result...' : 'Como resultado...' }</p>
              {
                language === 'US'?
                <h2 className='titule2'>Find the <span className='text_blue'>movie</span> you <span className='text_blue'>want.</span></h2>
                :
                <h2 className='titule2'>Encuentra la <span className='text_blue'>película</span> que <span className='text_blue'>quieras.</span></h2>
              }
          </div>
            <div data-aos="fade-up" data-aos-offset="350" className='card'>
              <div className='card_imgc'>
                <img className='card_img' src={MarcosAyala} alt='Marcos Ayala' />
              </div>
              <div className='card_text'>
                <h2 className='card_titule'>Marcos Ayala</h2>
                <p className='card_subtitule'>Frontend Developer / Designer</p>
              </div>
              <a href='https://www.linkedin.com/in/marcosdayala-/' target='_blank' className='card_button'>{ language === 'US'? 'Contact' : 'Contactar' }</a>
            </div>
            <a data-aos="fade-up" href="#top" className='button_up'>
              <IoIosArrowUp />
            </a>
        </div>
      </div>
    </>
  );
}

export default SectionFour;