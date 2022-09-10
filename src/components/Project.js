// Helper function used to loop through the tech key inside project object
// and make a list with the cooresponding FontAwesome icons to display
function usedTech(list) {
    const used = []
    if(list.includes('react')){
        used.push(<i class="fa-brands fa-react"></i>)
    }
    if(list.includes('js')){
        used.push(<i class="fa-brands fa-js"></i>)
    }
    if(list.includes('html')){
        used.push(<i class="fa-brands fa-html5"></i>)
    }
    if(list.includes('css')){
        used.push(<i class="fa-brands fa-css3-alt"></i>)
    }
    if(list.includes('scss')){
        used.push(<i class="fa-brands fa-sass"></i>)
    }
    return used
}

// Create a single component to display all project data. Uses the 
// helper function 'usedTech()' to render the <i> icons and has a
// single project object being passed in as a prop
function Project(props){
    return (
    <div className="card">
        <div className="card__info">
            <h3 className="card__title">{props.app.title}</h3>
            <p className="card__description">{props.app.info}</p>
            <div className="card__tech">
                {usedTech(props.app.tech)}
            </div>
        </div>
        <div className="card__img">
            <img src={props.app.image}></img>
            <a className="img__btn" href={props.app.link} target="_blank" >Demo</a>
        </div>
        {/* <img className="card__img" src={props.app.image} alt="screenshot of project app"/> */}
    </div>
    )
}

export default Project