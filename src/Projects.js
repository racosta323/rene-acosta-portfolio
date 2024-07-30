//projects section
import ProjectList from "./ProjectList";


function Projects(){
   
    return(
        <section className="projects" id='projects'>
            <h3>A game-changer for travel sales, distribution and management</h3>
            <p>One platform that connects all travel providers, resellers and partners with a single API.</p>
            <div>
                <ProjectList/>
            </div>
           
        </section>
    )
}

export default Projects;