import React from 'react';
import Hero from '../../sections/Hero/Hero';
import About from '../../sections/About/About';
// import Services from '../../Components/Services/Services';
import MyWork from '../../sections/MyWork/MyWork';
import Contact from '../../sections/Contact/Contact';


const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      {/* <Services /> */}
      <MyWork />
      <Contact />
    </div>
  );
}

export default Home;
