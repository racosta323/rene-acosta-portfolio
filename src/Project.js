// Individual project that will go on project list
import Modal from "./Modal";

function Project(){
    return(
        <>
            <div id="card">
                <div id="card-header"></div>
                <div id='logos'>
                    <h4>SHOWMATE</h4>
                </div>
                <div>
                    <p>Distribution, retailing, booking and management of all travel related content – in a single platform.</p>
                </div>
                <div id='project-btn'>
                    <button>Discover</button>
                </div>
            </div>  
            <Modal/>
        </>
    )
}

export default Project;