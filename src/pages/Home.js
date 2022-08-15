import Landing from '../components/Landing/Landing'
import Mission from '../components/Mission/Mission';
import Nav from '../components/Navigation/Nav';
import Skills from '../components/Skills/Skills';
import Stories from '../components/Stories/Stories';

const Home = () => {
  
  return (
    <>
      <div className='background'></div>
      <Nav/>
      <Landing />
      <Stories />
      <Mission />
      <Skills />
    </>
  );
}

export default Home;
