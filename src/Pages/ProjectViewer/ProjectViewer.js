import videos from "../../projects.json"
import VideoPlayer from "../../Components/VideoPlayer";
import ProjectsMenu from "../../Components/ProjectsMenu";
import ProjectStills from "../../Components/ProjectStills";
import { useParams } from 'react-router-dom';
import './ProjectViewer.css'

const ProjectViewer = () => {

    const { slug } = useParams();
    const project = videos.projects[slug];

    return (
        
        <div className="main-container">
            <title>{project.title}</title>
            <ProjectsMenu projects={videos} menuSlug={slug} />
            <div className="main-project-viewer-content">
                <div className="main-project-viewer-content-block">
                    {project.url && <VideoPlayer src={project.url} production_company={project.production_company} directed_by={project.directed_by} creative_direction={project.creative_direction} /> }
                    <ProjectStills folder={project.stills_folder || slug} images={project.stills} />
                </div>
            </div>
        </div>
    );
}

export default ProjectViewer;