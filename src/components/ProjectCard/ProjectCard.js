import Button from "../Button"

const ProjectCard = ({project}) => {
    // const {project-card, project-text} = styles;

    return (
        <div className="project-card">
            <img src={project.thumbnail} alt="project thumbnail"/>
            <div className="project-text">
                <div className="cat-label">
                    <h2>{project.title}</h2>
                </div>
                <div classname="action-btn">
                    <Button />
                </div>
            </div>
        </div>
    )
}



export default ProjectCard