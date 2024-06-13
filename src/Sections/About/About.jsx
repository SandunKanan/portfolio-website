import React from 'react'
import './About.scss'
import theme_pattern from '../../assets/icons/theme_pattern.svg'
import profileImg2 from '../../assets/sandun/sandun-kanangama-photo.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img className="about-left__img" src={profileImg2} alt="Sandun Kanangama" />
        </div>
        <div className="about-right">
            <div className="about-para">
              <p>I’ve recently embarked on a professional development journey, completing two intensive
                3-month bootcamps in web development and data science. With 4 years experience working at
                one of Australia’s big 4 banks, I have a strong foundation in business and finance.
                </p>
              <p>I’m currently seeking Data opportunities in Tokyo. Keen to contribute to
                innovative projects, and my approach to work and leadership is
                focused on strong collaboration between different teams, across departments.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>Python</p><hr className='about-skill__bar' style={{width:"90%"}} /></div>
                <div className="about-skill"><p>ML</p><hr className='about-skill__bar about-skill__bar--blue' style={{width:"70%"}} /></div>
                <div className="about-skill"><p>DL</p><hr className='about-skill__bar' style={{width:"50%"}} /></div>
                <div className="about-skill about-skill--blue"><p>NLP</p><hr className='about-skill__bar about-skill__bar--blue' style={{width:"80%"}} /></div>
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
