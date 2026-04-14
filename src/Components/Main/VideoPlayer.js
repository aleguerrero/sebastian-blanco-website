import allProjects from './../../projects.json'
import { useParams, useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player/vimeo';

const VideoPlayer = () => {
    const isMobile = window.innerWidth <= 768;
    const { slug } = useParams();
    const navigate = useNavigate();
    const project = allProjects.projects[slug];

    return (
        <div className="video-container" >
            <div className='credits-block'>
                <div className='credits-video courier'>
                    DIRECTED BY {project.directed_by}
                    <br />
                    PRODUCTION COMPANY {project.production_company}
                </div>
            </div>
            <ReactPlayer
                url={project.url}
                width={`${isMobile ? "100%" : "75%"}`}
                height="100%"
                controls={true}
                config={{
                    vimeo: {
                        playerOptions: {
                            autoplay: true,
                            playsinline: true
                        }
                    }
                }}
                className="video-player"
            />
            <p className="back-button" onClick={() => navigate(`/`)}>
                BACK TO LIST
            </p>
        </div>
    );
}

export default VideoPlayer;