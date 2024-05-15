import React from 'react'
import './Hero.css'
import profile_img from '../../assets/sandun_hero_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1><span>I'm Sandun Kanangama,</span> Data Scientist based in Tokyo.</h1>
      <p>I've come from Melbourne, Australia, and I am currently making a life and career
        switch, looking for Data Science roles in Tokyo. </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
