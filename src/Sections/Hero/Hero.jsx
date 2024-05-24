import React from 'react'
import './Hero.css'
import profile_img from '../../assets/sandun_hero_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../../assets/Sandun_Kanangama_Resume.pdf'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      {/* <img src={profile_img} alt="" className='profile-img' /> */}
      <div class="profile-img-container">
        <img src={profile_img} class="profile-img" alt="Profile Image" />
      </div>

      <h1>I'm <span>Sandun,</span> a Data Scientist based in Tokyo.</h1>
      <p>I've come from Melbourne, Australia. I am currently relocating to Japan, and making a transition from Business Analysis into Data and Tech.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
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
