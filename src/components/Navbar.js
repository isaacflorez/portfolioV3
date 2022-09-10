import { useState } from "react"
import Pdf from '../documents/resume.pdf'

// props contains a list of classes which change depending
// on width of screen for mobile or desktop view
function NavList(props) {
    const linkedin = "https://www.linkedin.com/in/isaac-florez-4bb57616b/"
    return (
        <ul className={props.toggleClass} >
            <li className="nav__item"><a className="nav__link" href={Pdf} target="_blank">Resume</a></li>
            <li className="nav__item"><a className="nav__link" href="#project-section" >Projects</a></li>
            <li className="nav__item"><a className="nav__link" href={linkedin} target="_blank" >Contact</a></li>
            
        </ul>
    )
}

function Navbar() {
    // state used to keep track of having the main nav
    // visible on desktop view and hidden during mobile view
    const [state, setState] = useState('nav__list')
    // toggle updates state when hamburger button is clicked
    const toggle = () => {
        if(state == 'nav__list'){
            setState('nav__list nav-visible')
        } else {
            setState('nav__list')
        }
    }
    return ( 
        <section className="navbar">
            <div className="container">
                <nav className="nav">
                    <div className="nav__mobile">
                        <span className="logo">//Developer Isaac</span>
                        <div className="nav__toggle" onClick={toggle}>
                            <div className="toggle__line"></div>
                            <div className="toggle__line"></div>
                        </div>
                    </div>
                    <NavList toggleClass={state}/> 
                </nav>
            </div>
        </section>
    )
}

export default Navbar