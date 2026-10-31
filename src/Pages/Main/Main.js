import { useState } from "react";
import './Main.css';
import ProjectsMenu from "../../Components/ProjectsMenu";
import ProjectPreview from "../../Components/ProjectPreview";

// if (process.env.REACT_APP_LA_MODE === "1") {
//     delete videos[3]; // quitar el de Debut
// }

const Main = () => {

    const [hoveredVideo, setHoveredVideo] = useState("");

    const handleMouseEnter = (video) => {
        setHoveredVideo(video)
    }

    return (
        <div className="main-container">
            <ProjectsMenu hoverEvent={handleMouseEnter}/>
            <ProjectPreview selectedVideo={hoveredVideo} />
        </div>

    );
}

export default Main;