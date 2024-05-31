import React from 'react'
import './WorkPage.scss'
import theme_pattern from '../../assets/icons/theme_pattern.svg'
import mywork_data from '../../assets/data/mywork_data'
import ProjectTile from '../../Components/ProjectTile/ProjectTile'

const Work = () => {
  return (
    <div id='work' className='mywork'>
      <div className="title-box">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work,index)=>{
            return <ProjectTile key={index} work={work}/>
        })}
      </div>
    </div>
  )
}

export default Work
