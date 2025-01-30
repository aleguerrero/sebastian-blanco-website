import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/vimeo';

const videos = [
    { id: 1, title: 'BAD HABIT', url: "https://vimeo.com/1036816601/2d3f289ffc", preview: process.env.PUBLIC_URL + "/previews/badhabit.mp4" },
    { id: 2, title: 'DIOR X ELLE MEXICO', url: "https://vimeo.com/962736308", preview: process.env.PUBLIC_URL + "/previews/dior.mp4" },
    { id: 3, title: "DEBUT", url: "https://vimeo.com/1021172687", preview: process.env.PUBLIC_URL + "/previews/debut.mp4" },
    { id: 4, title: "ADIDAS ORIGINALS", url: "https://vimeo.com/902639022", preview: process.env.PUBLIC_URL + "/previews/adidas.mp4" },
    { id: 5, title: "APUNTES DE ESPACIO", url: "https://vimeo.com/813280266", preview: process.env.PUBLIC_URL + "/previews/apuntesdeespacio.mp4" },
    { id: 6, title: "SOFI PAEZ", url: "https://vimeo.com/965948039", preview: process.env.PUBLIC_URL + "/previews/sofipaez.mp4" },
    { id: 7, title: "SANGRE PODEROSA", url: "https://vimeo.com/814487005", preview: process.env.PUBLIC_URL + "/previews/sangrepoderosa.mp4" },
    { id: 8, title: "CARLOS SADNESS", url: "https://vimeo.com/761548744", preview: process.env.PUBLIC_URL + "/previews/carlossadness.mp4" },
    { id: 9, title: "MARAH HOFFMAN X OO", url: "https://vimeo.com/913725910", preview: process.env.PUBLIC_URL + "/previews/marahhoffmanxoo.mp4" },
    { id: 10, title: "NEW BALANCE", url: "https://vimeo.com/813276519", preview: process.env.PUBLIC_URL + "/previews/newbalance.mp4" },
    { id: 11, title: "TOM Y JERRY", url: "https://vimeo.com/813278472", preview: process.env.PUBLIC_URL + "/previews/tomyjerry.mp4" },
    { id: 12, title: "BROXEL", url: "https://vimeo.com/978535256", preview: process.env.PUBLIC_URL + "/previews/broxel.mp4" },
    { id: 13, title: "CRUDA", url: "https://vimeo.com/814438844", preview: process.env.PUBLIC_URL + "/previews/cruda.mp4" },
];

const Main = ({ hoveredProject, setHoveredProject, setSelectedVideoHeader, selectedVideo, setSelectedVideo }) => {
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
                                    <div className="video-preview-container">
                                        <video autoPlay muted loop playsInline className="video-preview">
                                            <source src={video.preview} type="video/mp4" />
                                        </video>
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