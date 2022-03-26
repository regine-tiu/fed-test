import Button from "../Button"
import styles from "./ProjectCard.module.sass"

const ProjectCard = ({project}) => {
    const { 
        proj_card, 
        thumbnail, 
        proj_info,
        line_after_slug, 
        proj_text,
        action_btn
    } 
        = styles;

    return (
        <div className={proj_card}>
            <img src={project.thumbnail} alt="project thumbnail" className={thumbnail}/>
            <div className={proj_info}>
                <div className="cat-label">
                    <h3>{project.categories[0].title}</h3>
                </div>
                <hr className={line_after_slug}></hr>
                <div className={proj_text}>
                    <h2>{project.title}</h2>
                    <p>{project.excerpt}</p>
                </div>
                <div className={action_btn}>
                    <Button/>
                </div>
            </div>
        </div>
    )
}



export default ProjectCard