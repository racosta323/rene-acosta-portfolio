import ContactButton from "./ContactButton"
import Carousel from "./Carousel"


function Home(){
    return(
        <section className='home' id="home">
            <h2>Hello, I'm Rene Acosta!</h2>
            <div className="home-text">
                <p>I'm a full-stack software engineer passionate about data and efficiency, I craft scalable and innovative web applications that enhance user experiences and drive success. </p>
                <p>Let’s connect to explore how I can support your software engineering needs! </p>
            </div>
            <ContactButton/>
            <img
                src='/vecteezy_programmer-people-concept-use-laptop-and-programming-code_.jpg'
                alt='avatar of businessman'
                id="man-avatar"
            />
            <a 
                href="https://www.vecteezy.com/free-vector/software-development"
                id='link'
            >
                Software Development Vectors by Vecteezy
            </a>
            <p id="carousel-text">
                Tech startups I've supported in Customer Success roles:
            </p>
            <Carousel/>

        </section>
    )
}

export default Home