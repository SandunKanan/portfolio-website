import React from 'react'
import './ProjectTile.scss'

const ProjectTile = ({work}) => {
  return (
    <a href={work.link} target="_blank" className="tile-container">
      <img src={work.img} className="tile" alt={work.name} />
      <div className="overlay">
        <span>{work.name}</span>
        <span>{work.desc}</span>
      </div>
    </a>
  )
}

export default ProjectTile
