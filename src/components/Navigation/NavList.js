import NavElement from './NavElement';


const NavList = ({active}) => {
  const navItems = ['Home', 'Stories', 'About', 'Skills', 'Contact'];
  const position = {
    transform: 'translateX(-100%)'
  }

  if(active){
    position.transform = 'translateX(0)';
  } else {
    position.transform = 'translateX(-100%)';
  }

  return(
    <div className='nav' style={position}>
      {navItems.map((item, i) => <NavElement key={i} link={item} />)}
    </div>
  )
}

export default NavList;
