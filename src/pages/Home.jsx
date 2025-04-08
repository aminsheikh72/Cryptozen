import React from 'react';
import AllCoins from './AllCoins';
import About from './About';
import HeroSection from './HeroSection';

const Home = () => {
 

  return (
    <>
      {/* Hero Section */}
     <HeroSection/>

      <About />
      <AllCoins />
    </>
  );
}

export default Home;
