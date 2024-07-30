import Project from "./Project";
import Modal from './Modal'
import { projectsData } from "./projectsData";
import { useState, useEffect } from 'react'


function ProjectList(){

  const [projects, setProjects] = useState([])

  // console.log("projects", projects)

  useEffect(()=>{
      setProjects(projectsData)
  }, [])

  const renderProjects = () => {
    return projects?.map((project)=>{
      return <Project key={project.id} {...project}/>
    })
  }

    return(
        <div className="cards">
         {renderProjects()}
        </div>
    )
}

export default ProjectList;