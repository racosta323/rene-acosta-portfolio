import ContactButton from "./ContactButton"

function About(){
    return (
        <section className="about" id="about">
           <div id="bio">
                <h3>Let's connect!</h3>
                <p>
                    I've built and led customer success teams, collaborated with product and engineering teams, and completed a rigorous, full-time software engineering bootcamp with Flatiron School in 2024. I'm skilled in coding and passionate about projects that prioritize customer satisfaction. 
                </p>
                <p>
                    Connect with me if you share a passion for innovative tech projects, value customer satisfaction, or want to discuss software development and collaboration opportunities!
                </p>
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