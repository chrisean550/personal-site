import '../../styles/Stories.css';
import Story from './Story';
import content from './content.json';

const Stories = () => {
  return(
    <section id='stories' className='stories'>
      <div className='wrapper'>
      {
        content.map((item, i) =>
          <Story 
            key={i}
            story={item.story} 
            link={item.link} 
          />
        )
      }
      </div>
    </section>
  )
}

export default Stories;
