import ProjectTitle from "./ProjectTitle";
import projects from "./../projects.json";
import { NavLink } from 'react-router-dom';

const ProjectsMenu = ({ hoverEvent = () => { }, menuSlug = null }) => {
    return (
        <div className="main-projects-list-block">
            <div className="section-projects-block">
                <div className="section-title-block">
                    Narrative and Documentary
                </div>
                <ProjectTitle listVideos={projects.sections.narrative_documentary} handleEvent={hoverEvent} currentSlug={menuSlug} />
                <div className="section-title-block">
                    Commercial
                </div>
                <ProjectTitle listVideos={projects.sections.commercial} handleEvent={hoverEvent} currentSlug={menuSlug} />
                <div className="section-title-block">
                    Music
                </div>
                <ProjectTitle listVideos={projects.sections.music} handleEvent={hoverEvent} currentSlug={menuSlug} />
            </div>
            <div className="section-items-block">
                <div className="section-item-block">
                    <NavLink to="/">
                        Work
                    </NavLink>
                </div>
                <div className="section-item-block">
                    <NavLink to="/info">
                        Info
                    </NavLink>
                </div>
                <div className="section-item-block">
                    <NavLink to={"/diary"}>
                        Diary
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default ProjectsMenu;