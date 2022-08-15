import MissionAttribute from './MissionAttribute';
import content from './content.json';

const MissionAttributeList = () => {
  return (
    <div className='mission-attribute-wrapper'>
    {
      content.map((item, i) =>
        <MissionAttribute 
          key={i}
          title={item.title} 
          subtext={item.subtext} 
        />
       )
    }
  </div>
  )
}

export default MissionAttributeList;
