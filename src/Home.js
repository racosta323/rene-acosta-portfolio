import ContactButton from "./ContactButton"
import Carousel from "./Carousel"


function Home(){
    return(
        <section className='home'>
            <h2>Hello, I'm Rene Acosta!</h2>
            <div className="center">
                <p>Empower travellers and travel companies with choice, control and confidence. Snowfall's game-changing technology, Junction, makes booking and managing multimodal travel effortless.</p>
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
                Trusted by the world's leading brands
            </p>
            <Carousel/>

        </section>
    )
}

export default Home