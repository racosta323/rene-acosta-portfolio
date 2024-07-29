

function Modal ({ handleClose }) {

    return(
        <div className='modal'>
            <div className= 'modal-content'>
                <span className="close" onClick={handleClose}>&times;</span>
                <div id="modal-left">
                    <h3>Showmate</h3>
                    <h4>Summary</h4>
                    <p>Tech used: </p>
                    <p>TECH GOES HERE</p>
                </div>
                <div id="modal-right">
                    <img
                        src="/showmate_homepage.png"
                    />
                </div>
            </div>
        </div>
    )
}

export default Modal