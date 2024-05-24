import React from 'react'
import './ProjectTile.scss'

const ProjectTile = ({work}) => {
  return (
    <a href={work.link} target="_blank"><img src={work.img} class="tile" alt={work.name} /></a>
  )
}

export default ProjectTile
