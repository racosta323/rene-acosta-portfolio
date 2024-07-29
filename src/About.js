import ContactButton from "./ContactButton"

function About(){
    return (
        <section className="about">
           <div id="bio">
                <h3>Some sorta writing</h3>
                <p>
                    Easy integration. Access the world’s biggest travel inventory with just one API.
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