import allProjects from './../../projects.json'
import { useParams, useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player/vimeo';
import { useState } from 'react';

const VideoPlayer = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const { slug } = useParams();
    const navigate = useNavigate();
    const project = allProjects.projects[slug];

    return (
        <div className="video-container" >
            <div className='credits-video'>
                DIRECTED BY {project.directed_by}
                <br />
                PRODUCTION COMPANY {project.production_company}
            </div>
            <ReactPlayer
                url={project.url}
                width={`${isMobile ? "90%" : "75%"}`}
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