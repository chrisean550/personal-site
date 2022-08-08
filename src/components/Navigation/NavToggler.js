const NavToggler = (props) => {
  const {active, toggleNav} = props;
  const direction = {
    transform: 'rotate(180deg);'
  }

  if(active){
    direction.transform = 'rotate(180deg)';
  } else {
    direction.transform = 'rotate(0deg)';
  }

  return(
    <div className='navToggler' style={direction} onClick={toggleNav}>
        <i className="fa-solid fa-angles-right fa-xl"></i>
    </div>
  )
}

export default NavToggler;
