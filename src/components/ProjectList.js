import Project from "./Project"
import projects from "../data/projects"

function ProjectList () {
    // create a list of <Project /> components each using a
    // project data object from projects.js
    let currentProjects = projects.map((item) => {
        return <Project app={item} />
    })
    return (
        <section id="project-section" className="projects">
            <div className="container">
                <h1 className="section-title">//Recent Projects</h1>
                <div className="project-list">
                    {currentProjects}
                </div>
            </div>
        </section>
    )
}

export default ProjectList