import Landing from '../components/Landing/Landing'
import Nav from '../components/Navigation/Nav';
import Stories from '../components/Stories/Stories';

const Home = () => {
  
  return (
    <>
      <div className='background'></div>
      <Nav/>
      <Landing />
      <Stories />
    </>
  );
}

export default Home;
