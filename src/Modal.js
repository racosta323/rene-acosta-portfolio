

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
                        <div id='icons'>
                            <i className="bi bi-box-arrow-in-up-right tooltip">
                                <span className='tooltiptext'>Click to see site</span>
                            </i>
                        </div>
                        <div id='icons'>
                            <i className="bi bi-github tooltip">
                                <span className='tooltiptext'>Click to see GitHub</span>
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