import React from 'react'
import Navbar from './Sections/Navbar/Navbar'
import Hero from './Sections/Hero/Hero'
import About from './Sections/About/About'
// import Services from './Components/Services/Services'
import MyWork from './Sections/MyWork/MyWork'
import Contact from './Sections/Contact/Contact'
import Footer from './Sections/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      {/* <Services/> */}
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
