import { useEffect, useRef, useState } from "react"
import { HiMenu } from "react-icons/hi";

const Menu = () => {
  const menuAddress = useRef<HTMLUListElement>(null)
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [])

  const handleResize = () => {
    setWidth(window.innerWidth)
  }

  const handleShowMenu = () => {
    menuAddress.current?.classList.toggle('active');
  }

  if (width >= 700) {
    return (
      <div className='menu_container'>
        <ul className='menu_address_width'>
          <li><a  className='link_menu_width' href="/">Movies</a></li>
          <li><a className='link_menu_width' href="/about">About</a></li>
        </ul>
      </div>
    );
  }

  return (
    <div className='menu_container'>
      <div onClick={() => handleShowMenu()} className='menu_button'>
        <HiMenu size={'2rem'} />
      </div>
      <ul ref={menuAddress} className='menu_address'>
        <li><a className='link_menu' href="/">Movies</a></li>
        <li><a className='link_menu' href="/about">About</a></li>
      </ul>
    </div>
  );
}

export default Menu