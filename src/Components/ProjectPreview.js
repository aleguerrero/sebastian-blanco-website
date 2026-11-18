import { useState } from 'react';
import projects from './../projects.json'

const ProjectPreview = ({ selectedVideo }) => {

    const options = projects.stills;

    const [randomItem, setRandomItem] = useState(() => {
        return options[Math.floor(Math.random() * options.length)];
    });

    const pickNewItem = () => {
        const randomIndex = Math.floor(Math.random() * options.length);
        setRandomItem(options[randomIndex]);
    };

    return (
        <div className="main-projects-preview-block">
            <div className="main-preview-block">
                <img alt={randomItem} className='main-preview-image' src={randomItem} onMouseEnter={() => pickNewItem()} onMouseLeave={() => pickNewItem()}/>
            </div>
        </div>
    )
};

export default ProjectPreview;