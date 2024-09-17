//projects section
import ProjectList from "./ProjectList";


function Projects(){
   
    return(
        <section className="projects" id='projects'>
            <h3 className="heading">Projects</h3>
            <p>
                Each project demonstrates my dedication to solving problems and delivering innovative solutions. <br/> <span className="bold">Unless noted otherwise, project features reflect my individual contributions and efforts.</span>
            </p>
            
            <div className="card-container">
                <ProjectList/>
            </div>
           
        </section>
    )
}

export default Projects;