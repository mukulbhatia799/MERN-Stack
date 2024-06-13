import { data } from '../../data'
import './project.css'
import ProjectCard from '../../components/ProjectCard/ProjectCard'

const Project = () => {
    const { projects } = data;

    return (
        <div className="container">
            <h1>Projects</h1>
            <div className="project-outer-div">
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project}/>
                ))}
            </div>
        </div>
    )
}

export default Project