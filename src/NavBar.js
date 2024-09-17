import ContactButton from  './ContactButton'
import { useEffect, useState } from 'react';

function NavBar() {

    const [scroll, setScroll] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            setScroll(window.scrollY > 5);
        })
    },[])

    return(
        <header className='sticky'>
            <div id={`${scroll ? 'nav-container-solid' : 'nav-container'}`}>
                <div id='nav-left'>
                    <div className='nav-links'>
                        <ul>
                            <li><a href="#about">about</a></li>
                            <li><a href="#projects">projects</a></li>
                            <li><a href="mailto:racosta323@gmail.com">contact me</a></li>
                        </ul>
                    </div>
                </div>
                <div id={`${scroll ? 'nav-btn' : 'nav-btn-solid'}`}>
                    <ContactButton/>
                </div>
            </div>
        </header>
    )
}

export default NavBar;