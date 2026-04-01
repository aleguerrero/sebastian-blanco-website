import allProjects from './../../projects.json'
import { useParams, useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player/vimeo';

const VideoPlayer = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const project = allProjects.projects[slug];

    return (
        <div>
            <div className="video-container" >
                <div className='credits-video'>
                    DIRECTED BY {project.directed_by}
                    <br/>
                    PRODUCTION COMPANY {project.production_company}
                </div>
                <ReactPlayer
                    url={project.url}
                    width="75%"
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
                />
                <p className="back-button" onClick={() => navigate(`/`)}>
                    BACK TO LIST
                </p>
            </div>
        </div>
    );
}

export default VideoPlayer;