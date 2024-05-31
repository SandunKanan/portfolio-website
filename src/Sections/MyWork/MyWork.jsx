import React from 'react'
import { Link } from 'react-router-dom';

import './MyWork.css'
import theme_pattern from '../../assets/icons/theme_pattern.svg'
import mywork_data from '../../assets/data/mywork_data'
import arrow_icon  from '../../assets/icons/arrow_icon.svg'

import ProjectTile from '../../Components/ProjectTile/ProjectTile'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="title-box">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.slice(0,3).map((work,index)=>{
            return <ProjectTile key={index} work={work}/>
        })}
      </div>
      <Link to="/portfolio" className="mywork-showmore" style={{ textDecoration: 'none', color: 'inherit' }}>
        <p>Show More</p>
        <img src={arrow_icon} alt="Arrow Icon" />
      </Link>
    </div>
  )
}

export default MyWork
