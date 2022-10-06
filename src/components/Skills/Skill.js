const Skill = (props) => {
  const size =
    {
      'fontSize': (Math.random() * (9 - 4) + 4)+"em",
      'opacity': (Math.random() *(1 - .25) + .25)
    }
    
  return(
    <li style={size} >{props.skill}</li>
  )
}

export default Skill;
