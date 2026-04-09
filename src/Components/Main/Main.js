import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import videos from "../../projects.json"

if (process.env.REACT_APP_LA_MODE === "1") {
    delete videos[3]; // quitar el de Debut
}

const Main = () => {
    const [fade, setFade] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const navigate = useNavigate();

    function handleWindowsSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {


        const projects = videos.sections;

        projects.selected_work.forEach(slug => {
            const videopreload = document.createElement('video');
            videopreload.src = videos.projects[slug].preview;
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

    return (
        <div className={`container ${fade ? 'fade-out' : 'fade-in'}`}>
            <div className="list-container">
                {videos.sections.selected_work.map((v) => (
                    <div
                        className='video-container-prev'
                        onClick={() => handleVideoClick(v)}
                    >
                        <div>
                            <div className='title'>
                                {videos.projects[v].title}
                            </div>

                            {width <= 768 ? (
                                <div className="video-preview-container">
                                    <video autoPlay muted loop playsInline id="myVideo">
                                        <source src={videos.projects[v].preview} type="video/mp4" />
                                    </video>
                                </div>
                            ) : (
                                <video autoPlay muted loop playsInline disablePictureInPicture id="myVideo">
                                    <source src={videos.projects[v].preview} type="video/mp4" />
                                </video>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Main;