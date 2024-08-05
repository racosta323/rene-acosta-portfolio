import ContactButton from "./ContactButton"

function About(){
    return (
        <section className="about" id="about">
           <div id="bio">
                <h3>Let's connect!</h3>
                <p>
                    I've built and led customer success teams, collaborated with product and engineering teams, and completed a rigorous, full-time software engineering bootcamp with <a target="_blank" href="https://flatironschool.com/" rel="noopener noreferrer">Flatiron School</a> in 2024. I'm skilled in coding and passionate about projects that prioritize customer satisfaction. 
                </p>
                <p>
                    Connect with me if you share a passion for innovative tech projects, value customer satisfaction, or want to discuss software development and collaboration opportunities!
                </p>
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
                <div>
                    <ContactButton/>
                </div>
           </div>
           
           <div id='rene-container'>
                <div className="center">
                    <img
                        src='/IMG_0592.png'
                        alt='image of Rene'
                        className="reneimg"
                    />
                </div>
           </div>

        </section>
    )
}

export default About