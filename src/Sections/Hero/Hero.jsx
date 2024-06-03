import React from 'react'
import './Hero.css'
import profile_img from '../../assets/sandun/sandun_hero_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../../assets/sandun/Sandun_Kanangama_Resume.pdf'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <div className="profile-img-container">
        <a href="https://www.linkedin.com/in/sandun-kanangama" target="_blank" className="profile-link">
          <img src={profile_img} className="profile-img" alt="Profile Image" />
          <div className="overlay">
            <span>LinkedIn</span>
          </div>
        </a>
      </div>
      <h1>I'm <span>Sandun,</span> a Data Scientist based in Tokyo.</h1>
      <p>I've come from Melbourne, Australia. I am currently relocating to Japan, and making a transition from Business, into Data and Tech.</p>
      <div className="hero-action">
        <div className="hero-connect-box"><AnchorLink className='hero-connect' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <a href={resume} target="_blank">
          <div className="hero-resume">
            My Resume
          </div>
        </a>

      </div>
    </div>
  )
}

export default Hero
