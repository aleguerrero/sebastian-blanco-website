import React, { useEffect, useState } from 'react';
import './Stills.css';

const Stills = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Assuming you have an array of image names
        const imageNames = ['image1.jpeg', 'image2.jpeg', 'image3.jpeg', 'image4.jpeg'];
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