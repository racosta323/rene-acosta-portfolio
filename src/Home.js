import ContactButton from "./ContactButton"

function Home(){
    return(
        <section>
            <h1>Hello, I'm Rene Acosta!</h1>
            <div className="center">
                <h2>Empower travellers and travel companies with choice, control and confidence. Snowfall's game-changing technology, Junction, makes booking and managing multimodal travel effortless.</h2>
            </div>
            <ContactButton/>
            <img
                src='/vecteezy_programmer-people-concept-use-laptop-and-programming-code_.jpg'
                alt='avatar of businessman'
                id="man-avatar"
            />
            <a href="https://www.vecteezy.com/free-vector/software-development">Software Development Vectors by Vecteezy</a>
        </section>
    )
}

export default Home