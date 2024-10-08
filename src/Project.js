// Individual project that will go on project list
import Modal from "./Modal";
import { useState } from 'react'

function Project( { id, name, tagline, summary, image, tech, features, ghLink, siteLink, accomplishments }){

    const [ showModal, setShowModal ] = useState(false)

    const handleOpenModal = () => setShowModal(true)
    const handleCloseModal = () => setShowModal(false)

    return(
        <div className="card-width">
            <div id="card">
                <div className="card-name">
                    <h4><strong>{name}</strong></h4>
                </div>
                <div id="tagline">
                    <p>{tagline}</p>
                </div>
                <div id='project-btn'>
                    <button onClick={handleOpenModal}>Discover</button>
                </div>
            </div>  
            {showModal ? 
                <Modal 
                    handleClose={ handleCloseModal } 
                    name={name} 
                    summary={summary} 
                    tech={tech} 
                    image={image} 
                    gh={ghLink} 
                    site={siteLink}
                    features={features}
                    accomplishments={accomplishments}
                /> : 
            ''}
        </div>
    )
}

export default Project;