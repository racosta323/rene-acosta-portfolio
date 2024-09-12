import ContactButton from "./ContactButton"
import Carousel from "./Carousel"
import Profile from "./Profile"
import Resume from "./Resume"
import Projects from "./Projects"

function Home(){
    return(

        <section className="half">
            <div className="profile">
                <Profile/>
            </div>
            <div className="right">
                <Projects/>

            </div>

        </section>
    )
}

export default Home