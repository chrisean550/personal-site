import { useState } from 'react';
import '../../styles/Nav.css'
import NavToggler from './NavToggler';
import NavList from './NavList';


const Nav = () => {
  const [active, setActive] = useState(false);

  const toggleNav = () => {
    active ? setActive(false) : setActive(true);
  }

  return (
    <>
      <NavToggler active={active} toggleNav={toggleNav}/>
      <NavList active={active}/>
    </>
  )
}

export default Nav;
