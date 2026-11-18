import videos from "../projects.json"
import { NavLink } from 'react-router-dom';

const ProjectTitle = ({ listVideos, currentSlug = null }) => {
    return (
        <div>
            {
                listVideos.map((slug, i) => (
                    <li key={`${slug}-${i}`} className={`list-project-name${slug === currentSlug ? " current-playing-project" : ""}`} >
                        <NavLink to={`/projects/${slug}`}>
                            {videos.projects[slug].title}
                        </NavLink>
                    </li>
                ))
            }
        </div>
    )
};

export default ProjectTitle;
