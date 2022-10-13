const Story = (props) => {
  return(
    <a href={props.link}>
      <div className='story'>
        <h2 className='story-title'>{props.story}</h2>
      </div>
    </a>
  )
}

export default Story;
