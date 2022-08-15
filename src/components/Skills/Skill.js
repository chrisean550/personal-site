import { useState, useEffect } from "react";

const Skill = (props) => {
  const [size, changeSize] = useState(
    {
      'fontSize': (Math.random() * (9 - 4) + 4)+"em",
      'opacity': (Math.random() *(1 - .25) + .25)
    }
  )
  
  const updateSize = () => {
    changeSize(
      {
        'fontSize': (Math.random() * (9 - 4) + 4)+"em",
        'opacity': (Math.random() *(1 - .25) + .25)
      }
    )
  }

  useEffect(()=>{
    setInterval(updateSize, 10000)
  }, [])

  return(
    <li style={size} >{props.skill}</li>
  )
}

export default Skill;
