const NavElement = (props) => {
  return(
    <a className='navElement' href={"#"+props.link.toLowerCase()}>
      {props.link}
    </a>
  )
}

export default NavElement;
