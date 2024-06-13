import './skills.css'
import { data } from '../../data';

const Skills = () => {
    const { skills } = data;
    return (
        <>
            <div className="skills-container">
                <h1>Technologies</h1>
                <div className="skills-tech-stack">
                    {skills.map(tech => {
                        return <DisplayTech key={tech.title} title={tech.title} icon={tech.icon} />
                    })}
                </div>
            </div>
        </>
    )
}

const DisplayTech = ({ title, icon }) => {
    return <div className="skills-tech-div">
        <img src={`../../icons/${icon}.svg`} alt={title} />
        <h1>{title}</h1>
    </div>
}

export default Skills;