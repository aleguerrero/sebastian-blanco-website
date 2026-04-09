import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/vimeo';
import { useNavigate } from 'react-router-dom'
import videos from "../../projects.json"

const MusicVideos = ({ setSelectedVideoHeader, selectedVideo, setSelectedVideo }) => {
    const [fade, setFade] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        videos.sections.music_videos.forEach(video => {
            const videopreload = document.createElement('video');
            videopreload.src = videos.projects[video].preview;
            videopreload.preload = 'auto';
            videopreload.load();
        });
    }, []);


    const handleVideoClick = (video) => {
        setFade(true);
        setTimeout(() => {
            navigate(`/projects/${video}`);
            setFade(false);
        }, 500);
    };

    const handleBackClick = () => {
        setFade(true);
        setTimeout(() => {
            navigate(`/`);
            setFade(false);
        }, 500);
    };

    return (
        <div className={`container ${fade ? 'fade-out' : 'fade-in'}`}>
            {selectedVideo ? (
                <div className="video-container">
                    <ReactPlayer
                        url={selectedVideo.url}
                        width="100%"
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
                    <p className="back-button" onClick={handleBackClick}>
                        BACK TO LIST
                    </p>
                </div>
            ) : (
                <div className="list-container">
                    {videos.sections.music_videos.map((v) => (
                        <div
                            className='video-container-prev'
                            onClick={() => handleVideoClick(v)}
                        >
                            <div className='title'>
                                {videos.projects[v].title}
                            </div>
                            <div>
                                <video autoPlay muted loop playsInline disablePictureInPicture id="myVideo">
                                    <source src={videos.projects[v].preview} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default MusicVideos;