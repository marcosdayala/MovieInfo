import { useLocation } from "react-router";

const Footer = () => {
  let location = useLocation()

  if (location.pathname === '/about') {
    return <></>
  }

  return (
    <div className='footer_container margin_container'>
      <h4 className='footer_text'><span className='opacity'>By </span><span className='footer_title'>Marcos Ayala</span></h4>
    </div>
  );
}

export default Footer