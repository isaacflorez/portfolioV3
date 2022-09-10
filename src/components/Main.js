function AboutMe() {
    return (
        <div className="about">
            <h1 className="section-title">//About Me</h1>
            <div className="about__content">
                <p className="about__text">Hello, I am Isaac! I am passionate about gaining new skills and solving hard problems. I have absolute faith in my potential to be a great developer. I look forward to leveraging my skills and providing a valuable service for a company in the near future. Whether it is a small game or an app to impress my friends, I love the process of creating new projects from scratch. I am eager and determined to increase my knowlege and experience by landing a profession role as a jr developer. I have no doubts that my optimism, persistence and desire to learn will be beneficial in my future career as a dev.</p>
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