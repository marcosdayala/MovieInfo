import { useEffect, useRef, useState } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setLanguage } from "../slices/dataSlicesLanguage";
import movieInfoLogo from '../movieInfo_logo/movieInfo_logo_small.png'

const Nav = () => {
  
  const nav = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(window.innerWidth)

  const language = useAppSelector(state => state.dataLanguage.language)
  const dispatch = useAppDispatch()

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [language])

  const handleResize = () => {
    setWidth(window.innerWidth)
  }

  const handleMenu = () => {
    nav.current?.classList.remove('language')
    nav.current?.classList.toggle('active')
  }

  const handleLanguageButton = () => {
    nav.current?.classList.toggle('language')
  }

  const handleLanguage = (language: string) => {
    if (language === 'spanish') {
      sessionStorage.setItem('language', JSON.stringify('ES'))
      dispatch(setLanguage('ES'))
    }
    else if(language === 'english') {
      sessionStorage.setItem('language', JSON.stringify('US'))
      dispatch(setLanguage('US'))
    }
  }

  if (width >= 1000) {
    nav.current?.classList.remove('language')
    return (
      <div ref={nav} className='container_all_nav'>
        <div className='nav header'>
          <div className='container nav_container'>
            <img className='logo' src={movieInfoLogo} alt='logo' />
            <div className='flex'>
              <a className='menu_button' href='/'><span className='text'>{ language === 'US' ? 'Movies' : 'Películas' }</span></a>
              <a onClick={handleMenu} className='menu_button'><span className='text'>{ language === 'US' ? 'Languages' : 'Idioma' }</span></a>
            </div>
          </div>
        </div>
        <div className='nav'>
          <div className='container menu_container'>
            <div className='menu'>
              <a onClick={() => handleLanguage('spanish')} className='menu_element'><span className='text'>{ language === 'US' ? 'Spanish' : 'Español' }</span></a>
              <a onClick={() => handleLanguage('english')} className='menu_element'><span className='text'>{ language === 'US' ? 'English' : 'Ingles' }</span></a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div ref={nav} className='container_all_nav'>
      <div className='nav header'>
        <div className='container nav_container'>
          <img className='logo' src={movieInfoLogo} alt='logo' />
          <label  htmlFor='check' className="bar">
            <input onClick={handleMenu} id="check" type="checkbox" />

            <span className="top"></span>
            <span className="middle"></span>
            <span className="bottom"></span>
          </label>
        </div>
      </div>
      <div className='nav'>
        <div className='container menu_container'>
          <div className='menu'>
            <a className='menu_element' href='/'><span className='text'>{ language === 'US' ? 'Movie' : 'Películas' }</span></a>
            <a onClick={handleLanguageButton} className='menu_element'><span className='text'>{ language === 'US' ? 'Languages' : 'Idioma' }</span></a>
            <div className='menu_element deep'>
              <a onClick={() => handleLanguage('spanish')} className='menu_element_deep'><span className='text white'>{ language === 'US' ? 'Spanish' : 'Español' }</span></a>
              <a onClick={() => handleLanguage('english')} className='menu_element_deep'><span className='text white'>{ language === 'US' ? 'English' : 'Ingles' }</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav