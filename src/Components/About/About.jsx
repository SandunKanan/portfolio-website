import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            {/* <img src={profile_img} alt="" /> */}
        </div>
        <div className="about-right">
            <div className="about-para">
              <p>I have over 4 years experience at one of Australia's Big 4 Banks,
                with roles as a Risk Systems Analyst, Project Manager and Mortgage Collections Case Manager.
              </p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>Python</p><hr style={{width:"90%"}} /></div>
                <div className="about-skill"><p>ML</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>DL</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>NLP</p><hr style={{width:"80%"}} /></div>
            </div>
        </div>
      </div>
      {/* <div className="about-achievements">
        <div className="about-achievement">
            <h1>10+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>90+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div> */}
    </div>
  )
}

export default About
