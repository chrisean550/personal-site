import '../../styles/Mission.css';
import MissionAttributeList from './MissionAttributeList';
import MissionStatement from './MissionStatement';

const Mission = () => {
  return(
    <section id='mission' className='mission'>
      <MissionStatement />
      <MissionAttributeList />
    </section>
  )
}

export default Mission;
