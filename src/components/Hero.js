import Pdf from '../documents/resume.pdf'
function Hero() {
    let resumeText = "View resume >"
    let projectsText = "Recent projects >"
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__content">
                    <h1 className="hero__title">Isaac Florez</h1>
                    <p className="hero__description">Software Developer</p>
                    <div className="hero__buttons">
                        <a className="hero__button resume__button" href={Pdf} target="_blank">{resumeText}</a>
                        <a className="hero__button project__button" href="#project-section">{projectsText}</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero