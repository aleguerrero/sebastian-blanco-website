import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/vimeo';

const videos = [
    { id: 1, title: 'Dior x ELLE Mexico "Escultor de sueños" Andres Monnier', url: "https://vimeo.com/962736308", gif: process.env.PUBLIC_URL + "/gif1.gif" },
    { id: 2, title: '"Stay Original" Adidas Originals Mexico', url: "https://vimeo.com/902639022", gif: process.env.PUBLIC_URL + "/gif2.gif" },
    { id: 3, title: "CRUDA Invierno 2022", url: "https://vimeo.com/814438844", gif: process.env.PUBLIC_URL + "/gif3.gif" },
];

const Main = ({ hoveredProject, setHoveredProject, setSelectedVideoHeader }) => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [fade, setFade] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowsSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowsSizeChange);

        return () => {
            window.removeEventListener('resize', handleWindowsSizeChange);
        }
    }, []);

    const handleVideoClick = (video) => {
        setFade(true);
        setTimeout(() => {
            setSelectedVideo(video);
            setSelectedVideoHeader(true);
            setFade(false);
            setHoveredProject(null);
        }, 500);
    };

    const handleBackClick = () => {
        setFade(true);
        setTimeout(() => {
            setSelectedVideoHeader(false);
            setSelectedVideo(null);
            setFade(false);
        }, 500);
    };

    const handleHoveredProject = (project) => {

        if (typeof window !== 'undefined' && window.innerWidth <= 768) {
            return;
        }

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
                    <p className="back-button" onClick={handleBackClick}>
                        Back to list
                    </p>
                </div>
            ) : (
                <div className="list-container">
                    <ul className="list">
                        {videos.map((video) => (
                            <li key={video.id}
                                className='list-item'
                                onClick={() => handleVideoClick(video)}
                                onMouseEnter={() => handleHoveredProject(video)}
                                onMouseLeave={() => handleHoveredProject(null)}>
                                <p
                                    className="video-button">
                                    {video.title}
                                </p>
                                {width <= 768 ? (
                                    <div className="gif-container">
                                        <img src={video.gif} alt="gif" className="gif-mobile" />
                                    </div>
                                ) : (
                                    null
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Main;