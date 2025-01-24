import { useState } from 'react';
import ReactPlayer from 'react-player/vimeo';

const videos = [
    { id: 1, title: "Project 1", url: "https://vimeo.com/962736308", gif: process.env.PUBLIC_URL + "/gif1.gif" },
    { id: 2, title: "Project 2", url: "https://vimeo.com/902639022" },
];

const Main = ({ hoveredProject, setHoveredProject }) => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [fade, setFade] = useState(false);

    const handleVideoClick = (video) => {
        setFade(true);
        setTimeout(() => {
            setSelectedVideo(video);
            setFade(false);
            setHoveredProject(null);
        }, 500);
    };

    const handleBackClick = () => {
        setFade(true);
        setTimeout(() => {
            setSelectedVideo(null);
            setFade(false);
        }, 500);
    };

    const handleHoveredProject = (project) => {
        setHoveredProject(project);
    }

    return (
        <div className={`container ${fade ? 'fade-out' : 'fade-in'}`}>
            {selectedVideo ? (
                <div class="video-container">
                    <ReactPlayer
                        url={selectedVideo.url}
                        width="100%"
                        height="100%"
                        controls={true}
                        playing={true} />
                    <p onClick={handleBackClick}>
                        Back to list
                    </p>
                </div>
            ) : (
                <div className="list-container">
                    <ul className="list">
                        {videos.map((video) => (
                            <li key={video.id} className='list-item'>
                                <p
                                    onClick={() => handleVideoClick(video)}
                                    onMouseEnter={() => handleHoveredProject(video)}
                                    onMouseLeave={() => handleHoveredProject(null)}
                                    className="video-button">
                                    {video.title}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Main;