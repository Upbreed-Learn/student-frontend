import Courses from './courses';
import Hero, { MobileHero } from './hero';

const Home = () => {
  return (
    <>
      <Hero />
      <MobileHero />
      <Courses />
    </>
  );
};

export default Home;
