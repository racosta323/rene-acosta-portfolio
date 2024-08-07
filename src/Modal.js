import { render } from "@testing-library/react";
import Features from "./Features";


function Modal ({ handleClose, name, summary, tech, image, gh, site, features }) {

    const handleOutsideClick = (e) => {

        if (e.target.className === 'modal') {
          handleClose();
        }
      };

    const renderFeatures = () => {
        return features.map((feature)=>{
            return (
                <li key={feature}>{feature}</li>
            )
        })}

    return(
        <div className='modal' onClick={handleOutsideClick}>
            <div className= 'modal-content' onClick={(e) => e.stopPropagation()}>
                <div className='modal-top'>
                    <div id="modal-left">
                        <h3>{name}</h3>
                        <h4>{summary}</h4>
                        <div id="tech">
                            <p><strong>Tech used: </strong>{tech}</p>
                        </div>
                        <div className="project-links">
                            {site && typeof site === 'string' && (
                                <div id='icons'>
                                    <a href={site} target="_blank" rel="noopener noreferrer">
                                        <i className="bi bi-box-arrow-in-up-right tooltip">
                                            <span className='tooltiptext'>Click to see site</span>
                                        </i>
                                    </a>
                                </div>
                            )}
                            <div id='icons'>
                                <a href={gh} target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-github tooltip">
                                        <span className='tooltiptext'>Click to see GitHub</span>
                                    </i>
                                </a>    
                            </div>
                        </div>
                    </div>
                    <div id="modal-right">
                        <div className="close">
                            <i className="bi bi-x-square-fill" onClick={handleClose}></i>
                        </div>
                        <img
                            src={image}
                            alt=''
                        />
                    </div>
                </div>
                <Features renderFeatures={renderFeatures}/>
            </div>
        </div>
    )
}

export default Modal