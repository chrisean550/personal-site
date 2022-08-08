import '../../styles/Landing.css';
import Heading from './Heading';
import Headshot from './Headshot';
const Landing = () => {

  return(
    <section className='section-wrapper'>
      <Headshot />
      <Heading />
    </section>
  );
}

export default Landing;
