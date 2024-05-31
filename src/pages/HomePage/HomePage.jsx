import React from 'react';
import Hero from '../../Sections/Hero/Hero';
import About from '../../Sections/About/About';
// import Services from '../../Components/Services/Services';
import MyWork from '../../Sections/MyWork/MyWork';
import Contact from '../../Sections/Contact/Contact';


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
