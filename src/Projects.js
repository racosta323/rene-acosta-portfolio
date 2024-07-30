//projects section
import ProjectList from "./ProjectList";


function Projects(){
   
    return(
        <section className="projects" id='projects'>
            <h3>Discover key projects that showcase my journey and skills</h3>
            <p>
            Each project demonstrates my dedication to solving problems and delivering innovative solutions. <br/> <span className="bold">Unless noted otherwise, project features reflect my individual contributions and efforts.</span>
            </p>
            <div>
                <ProjectList/>
            </div>
           
        </section>
    )
}

export default Projects;