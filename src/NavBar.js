import ContactButton from  './ContactButton'
import { useEffect, useState } from 'react';

function NavBar() {

    const [scroll, setScroll] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            setScroll(window.scrollY > 10);
        })
    },[])

    return(
        <header className={`${scroll ? 'sticky' : ""}`}>
            <div id={`${scroll ? 'nav-container-solid' : 'nav-container'}`}>
                <div id='nav-right'>
                    <h1><a href="#home">RENE ACOSTA</a></h1>
                    <ul>
                        <li><a href="#about">about</a></li>
                        <li><a href="#projects">projects</a></li>
                        <li><a href="mailto:racosta323@gmail.com">contact me</a></li>
                    </ul>
                </div>
                <div id={`${scroll ? 'nav-btn' : 'nav-btn-solid'}`}>
                    <ContactButton/>
                </div>
            </div>
        </header>
    )
}

export default NavBar;