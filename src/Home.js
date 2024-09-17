import ContactButton from "./ContactButton"
import Carousel from "./Carousel"
import Profile from "./Profile"
import Resume from "./Resume"
import Projects from "./Projects"
import About from "./About"

function Home(){
    return(

        <section className="half">
            <div className="profile">
                <Profile/>
            </div>
            <div className="right">
                <About/>
                <Resume/>
                <Projects/>
            </div>

        </section>
    )
}

export default Home