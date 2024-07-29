// Individual project that will go on project list
import Modal from "./Modal";
import { useState } from 'react'

function Project(){

    const [ showModal, setShowModal ] = useState(false)

    const handleOpenModal = () => setShowModal(true)
    const handleCloseModal = () => setShowModal(false)

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
                    <button onClick={handleOpenModal}>Discover</button>
                </div>
            </div>  
            {showModal ? <Modal handleClose={ handleCloseModal }/> : ''}
        </>
    )
}

export default Project;