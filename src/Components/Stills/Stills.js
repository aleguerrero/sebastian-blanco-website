import React, { useEffect, useState } from 'react';
import './Stills.css';

const Stills = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const imageNames = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.JPG", "08.jpg", "09.jpg", "10.jpg", "11.jpg", "12.jpg"];
        const imagePaths = imageNames.map(name => `${process.env.PUBLIC_URL}/stills/${name}`);
        setImages(imagePaths);
    }, []);

    return (
        <div className="stills-container">
            <div className='pics-row'>
                {images.map((src, index) => (
                    <img key={index} src={src} alt={`Still ${index}`} className="still-image" />
                ))}
            </div>
        </div>
    );
};

export default Stills;