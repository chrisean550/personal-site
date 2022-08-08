import '../../styles/Stories.css';
import Story from './Story';

const Stories = () => {
  return(
    <section className='stories'>
      <div className='wrapper'>
        <Story story='FLOH'/>
        <Story story='JoJo'/>
        <Story story='Han Art'/>
        <Story story='Run Automated'/>
        <Story story='BLM Wash'/>
        <Story story='C. May Interiors'/>
      </div>
    </section>
  )
}

export default Stories;
