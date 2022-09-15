import '../styles_sheets/About.css'
import SectionFour from './about_components/SectionFour';
import SectionOne from './about_components/SectionOne';
import SectionThird from './about_components/SectionThree';
import SectionTwo from './about_components/SectionTwo';
import { useEffect, useState } from "react"
import { useAppSelector } from '../app/hooks';
import AOS from 'aos';
import "aos/dist/aos.css";

export default function About() {
  const language = useAppSelector(state => state.dataLanguage.language)

  const [width, setWidth] = useState(window.innerWidth)

  const handleResize = () => setWidth(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [language])

  useEffect(() => {
    if (width >= 1000) { 
      AOS.init({
        duration: 1000,
        offset: 600,
        once: true,
        anchorPlacement: 'top-bottom'
      })
    }
    else {
      AOS.refresh()
      AOS.init({
        duration: 1000,
        offset: 300,
        once: true,
        anchorPlacement: 'top-bottom'
      })
    }
  }, [])

  return (
    <>
      <SectionOne widthScreen={width} />
      <SectionTwo widthScreen={width} />
      <SectionThird widthScreen={width} />
      <SectionFour widthScreen={width} />
    </>
  );
}