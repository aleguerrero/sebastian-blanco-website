import { useState } from 'react';
import './Main.css';
import ProjectsMenu from "../../Components/ProjectsMenu";
import projects from "../../projects.json";

// if (process.env.REACT_APP_LA_MODE === "1") {
//     delete videos[3]; // quitar el de Debut
// }

const getProjectStill = (slug) => {
    const project = projects.projects[slug];
    if (!project || !project.stills_folder || !project.stills?.length) return null;
    return `${process.env.PUBLIC_URL}/stills/projects/${project.stills_folder}/${project.cover || project.stills[0]}`;
};

const Main = () => {
    const [hoveredSlug, setHoveredSlug] = useState(null);
    const stillSrc = hoveredSlug ? getProjectStill(hoveredSlug) : null;

    return (
        <div className="main-container">
            <ProjectsMenu onProjectHover={setHoveredSlug} />
            <div className="main-hover-still-block">
                {stillSrc && (
                    <img
                        key={stillSrc}
                        src={stillSrc}
                        alt={projects.projects[hoveredSlug].title}
                        className="main-hover-still-image"
                    />
                )}
            </div>
        </div>
    );
}

export default Main;
