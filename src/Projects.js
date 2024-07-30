//projects section
import ProjectList from "./ProjectList";


function Projects(){
   
    return(
        <section className="projects" id='projects'>
            <h3>Check Out My Project Portfolio</h3>
            <p>
                Take a look at the exciting projects I've worked on.
            </p>
            <p>
                Each project represents a step in my journey, showcasing my skills and passion for problem-solving.
            </p>
            <div>
                <ProjectList/>
            </div>
           
        </section>
    )
}

export default Projects;