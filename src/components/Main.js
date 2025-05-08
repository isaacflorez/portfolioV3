function AboutMe() {
    return (
        <div className="about">
            <h1 className="section-title">//About Me</h1>
            <div className="about__content">
                <p className="about__text">Hello, I am Isaac!</p>
            </div>
        </div>
    )
}

function CurrentTech() {
    return (
        <aside className="current-tech">
            <p className="section-title">//Current Tech</p>
            <div className="tech__icons">
                <i class="fa-brands fa-react"></i>
                <i class="fa-brands fa-js"></i>
                <i class="fa-brands fa-html5"></i>
                <i class="fa-brands fa-css3-alt"></i>
            </div>
        </aside>
    )
}

function Main() {
    return (
        <div className="main">
            <div className="container">
                <div className="intro">
                    <AboutMe />
                    <CurrentTech />
                </div>
            </div>
        </div>
    )
}

export default Main