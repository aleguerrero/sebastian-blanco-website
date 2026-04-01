import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/vimeo';
import { useNavigate } from 'react-router-dom'
import videos from "../../projects.json"

const Commercial = ({ setSelectedVideoHeader, selectedVideo, setSelectedVideo }) => {
    const [fade, setFade] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const navigate = useNavigate();
    // const [selectedWork, setSelectedWork] = useState(true);
    // const [commercial, setCommercial] = useState(false);

    function handleWindowsSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {

        // videos.selected_work.forEach(video => {
        //     const videopreload = document.createElement('video');
        //     videopreload.src = video.preview;
        //     videopreload.preload = 'auto';
        //     videopreload.load();
        // });

        videos.sections.commercial.forEach(video => {
            const videopreload = document.createElement('video');
            videopreload.src = videos.projects[video].preview;
            videopreload.preload = 'auto';
            videopreload.load();
        });

        window.addEventListener('resize', handleWindowsSizeChange);

        return () => {
            window.removeEventListener('resize', handleWindowsSizeChange);
        }


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

    // const handleHoveredProject = (project) => {

    //     if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    //         return;
    //     }

    //     setHoveredProject(project);
    // }

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
                    {/* <ul className="list">
                        {videos.map((video) => (
                            <li key={video.id}
                                className='list-item'
                                onClick={() => handleVideoClick(video)}
                                onMouseEnter={() => handleHoveredProject(video)}
                                onMouseLeave={() => handleHoveredProject(null)}>
                                <p className="video-button">
                                    {video.title}
                                </p>
                                {width <= 768 ? (
                                    <div className="video-preview-container">
                                        <video autoPlay muted loop playsInline id="myVideo">
                                            <source src={video.preview} type="video/mp4" />
                                        </video>
                                    </div>
                                ) : (
                                    null
                                )}
                            </li>
                        ))}
                    </ul> */}

                    {/* {selectedWork &&
                        videos.selected_work.map((v) => (
                            <div className='video-container'>
                                <div className='title'>
                                    {v.title}
                                </div>
                                <div>
                                    <video autoPlay muted loop playsInline id="myVideo">
                                        <source src={v.preview} type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        ))
                    } */}
                    {videos.sections.commercial.map((v) => (
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

export default Commercial;