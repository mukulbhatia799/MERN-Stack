import './projectCard.css'

const ProjectCard = ({project}) => {
    return <div className="project-card-div">
        <img className="project-img" src={project.img} alt={project.title} />
        <div className="">
            <div className="project-title">{project.title}</div>
            <div className="project-description">{project.desc}</div>
        </div>
        <div className="project-stack">
            {project.technologies.map(tech => <div className="tech">{tech}</div>)}
        </div>
        <div className="buttons">
            <a href={project.live}>
                <button className="btn btn-secondary text-light">Live</button>
            </a>
            <a href={project.github}>
                <button className="btn btn-dark">Github</button>
            </a>
        </div>
    </div>
}

export default ProjectCard 