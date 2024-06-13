import './skills.css'
import { data } from '../../data';

const Skills = () => {
    const { skills } = data;
    return (
        <>
            <div className="container">
                <h1>Technologies</h1>
                <div className="tech-stack">
                    {skills.map(tech => {
                        return <DisplayTech key={tech.title} title={tech.title} icon={tech.icon} />
                    })}
                </div>
            </div>
        </>
    )
}

const DisplayTech = ({ title, icon }) => {
    console.log(`../../icons/${icon}.svg`)
    return <div className="tech-div">
        <img src={`../../icons/${icon}.svg`} alt={title} />
        <h1>{title}</h1>
    </div>
}

export default Skills;