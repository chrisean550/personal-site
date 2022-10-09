import Landing from '../components/Landing/Landing'
import Mission from '../components/Mission/Mission';
import Nav from '../components/Navigation/Nav';
import Skills from '../components/Skills/Skills';
import Stories from '../components/Stories/Stories';
import Contact from '../components/Contact/Contact';

const Home = () => {
  return (
    <>
      <div className='background'></div>
      <Nav/>
      <Landing />
      <Stories />
      <Mission />
      <Skills />
      <Contact />
    </>
  );
}

export default Home;
