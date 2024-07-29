import Project from "./Project";
import Modal from './Modal'
import { projectsData } from "./projectsData";
import { useState, useEffect } from 'react'


function ProjectList(){

  const [projects, setProjects] = useState([])

  console.log("hello")

  // useEffect(()=>{
  //     setProjects(projectsData)
  // }, [])

  const renderProjects = () => {
    console.log("nothing yet")
    }

    return(
        <div className="cards">
          <Project projects={projects}/>
         
        </div>
    )
}

export default ProjectList;