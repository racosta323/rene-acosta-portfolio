

function Modal ({ handleClose, name, summary, tech, image }) {

    const handleOutsideClick = (e) => {

        if (e.target.className === 'modal') {
          handleClose();
        }
      };

    return(
        <div className='modal' onClick={handleOutsideClick}>
            <div className= 'modal-content' onClick={(e) => e.stopPropagation()}>
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
                    <div className="close">
                        <i class="bi bi-x-square-fill" onClick={handleClose}></i>
                    </div>
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