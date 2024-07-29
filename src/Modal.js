

function Modal ({ handleClose }) {

    return(
        <div className='modal'>
            <div className= 'modal-content'>
                <div id="modal-left">
                    <h3>Showmate</h3>
                    <h4>Summary</h4>
                    <p>Tech used: </p>
                    <p>TECH GOES HERE</p>
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