// Individual project that will go on project list
import Modal from "./Modal";
import { useState } from 'react'

function Project( { id, name, tagline, summary, image, tech, features, link }){

    console.log(id, name, tagline, summary, image, tech, features, link )

    const [ showModal, setShowModal ] = useState(false)

    const handleOpenModal = () => setShowModal(true)
    const handleCloseModal = () => setShowModal(false)

    return(
        <>
            <div id="card">
                <div id="card-header">
                    <img
                        src={image}
                        alt=''
                    />
                </div>
                <div id='logos'>
                    <h4>{name} </h4>
                </div>
                <div>
                    <p>{tagline}</p>
                </div>
                <div id='project-btn'>
                    <button onClick={handleOpenModal}>Discover</button>
                </div>
            </div>  
            {showModal ? <Modal handleClose={ handleCloseModal } name={name} summary={summary} tech={tech} image={image}/> : ''}
        </>
    )
}

export default Project;