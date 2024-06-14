import React from 'react'
import './Hero.scss'
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
      <h1>I'm <span>Sandun,</span> a <span className='job'>Data Scientist</span> and <span className='job'>Web Developer</span> in Tokyo.</h1>
      <p>I've come from Melbourne, Australia. I am currently relocating to Japan, and I've made a transition from Business into Tech.</p>
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
