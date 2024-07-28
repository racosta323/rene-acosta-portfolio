import ContactButton from  './ContactButton'

function NavBar() {
    return(
        <div id="nav-container">
            <div id='nav-right'>
                <h1>RENE ACOSTA</h1>
                <ul>
                    <li><a href="#about">about</a></li>
                    <li><a href="#projects">projects</a></li>
                    <li><a href="#contact">contact me</a></li>
                </ul>
            </div>
            <div id='nav-btn'>
                <ContactButton/>
            </div>
        </div>
    )
}

export default NavBar;