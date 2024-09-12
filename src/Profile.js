import ContactButton from "./ContactButton"

function Profile(){
    return (
        <section className="about" id="about">
           
            <div className="bio-right">
                <h2>Rene Acosta</h2>
                <h3>Software Engineer</h3>
                <div id='icons'>
                    <a href='https://www.linkedin.com/in/acostarene/' target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-linkedin tooltip">
                            <span className='tooltiptext'>
                                Check out my LinkedIn!
                            </span>
                        </i>
                    </a>
                    <a href='https://www.medium.com/@racosta323' target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-medium tooltip">
                            <span className='tooltiptext'>
                                Check out my blog!
                            </span>
                        </i>
                    </a>
                    <a href='https://github.com/racosta323/' target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-github tooltip">
                            <span className='tooltiptext'>
                                Check out my GitHub!
                            </span>
                        </i>
                    </a>
                </div>
                <div className="contact-btn">
                    <button type="button"> 
                        <p><a href="mailto:racosta323@gmail.com"> &#10132; Contact Me</a></p>
                    </button>
                </div>
           </div>
           
            

        </section>
    )
}

export default Profile