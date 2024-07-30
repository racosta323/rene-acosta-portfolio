

function Modal ({ handleClose, name, summary, tech }) {

    return(
        <div className='modal'>
            <div className= 'modal-content'>
                <div id="modal-left">
                    <h3>{name}</h3>
                    <h4>{summary}</h4>
                    <p>Tech used:</p>
                    <p>{tech}</p>
                </div>
                <div id="modal-right">
                    <div className="close"><span  onClick={handleClose}>&times;</span></div>
                    <img
                        src="/showmate_homepage.png"
                    />
                </div>
            </div>
        </div>
    )
}

export default Modal