

function Modal ({ handleClose, name, summary, tech, image }) {

    return(
        <div className='modal'>
            <div className= 'modal-content'>
                <div id="modal-left">
                    <h3>{name}</h3>
                    <h4>{summary}</h4>
                    <div id="tech">
                        <p>Tech used:</p>
                        <p>{tech}</p>
                    </div>
                    <div className="project-links">
                        SITE ICON
                        <div id='icons'>
                            <i className="bi bi-github tooltip">
                                <span className='tooltiptext'>Do you see this?</span>
                            </i>
                        </div>
                    </div>
                </div>
                <div id="modal-right">
                    <div className="close"><span  onClick={handleClose}>&times;</span></div>
                    <img
                        src={image}
                        alt=''
                    />
                </div>
            </div>
        </div>
    )
}

export default Modal