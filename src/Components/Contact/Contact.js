import './Contact.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {

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

    return (
        <div className="contact-container">
            <div className='contact-box'>
                <table className='contact-table'>
                    <tr>
                        <td className='contact-table-title'>BIO</td>
                        <td className='contact-table-text'>Sebastián Blanco is a Costa Rican Director of Photography and Photographer based between Mexico City and Los Angeles. His visual language was shaped through skateboarding, documenting his surroundings and close collaborators. He works across music videos, narrative, and commercial projects. He was part of the ASC Vision Mentorship Program (2023–2024).</td>
                    </tr>
                    <tr>
                        <td className='contact-table-title'>CLIENTS & PRODUCTION COMPANIES</td>
                        <td className='contact-table-text'>adidas Originals, Ford, Corona, New Balance, Dior, Sony Music, Uber, Chevrolet & Stink Films, LANDIA, The LIFT, Violeta Films, Another Video</td>
                    </tr>
                    <tr>
                        <td className='contact-table-title'>EMAIL</td>
                        <td className='contact-table-text'><a href="mailto:sebastianblancodp@gmail.com">sebastianblancodp@gmail.com</a></td>
                    </tr>
                </table>
                {width <= 768 && (
                    <div className='contact-links'>
                        <div className='instagram-logo'>
                            <a href="https://www.instagram.com/sebstnblanco/" target="_blank" rel="noreferrer"> <img src={process.env.PUBLIC_URL + "/instagramlogo.png"} alt="instagram" /></a>
                        </div>
                        <div className='vimeo-logo'>
                            <a href="https://vimeo.com/sebastianblanco" target="_blank" rel="noreferrer"> <img src={process.env.PUBLIC_URL + "/vimeologo.png"} alt="vimeo" /></a>
                        </div>
                    </div>
                )}
                <div className='contact-back-button'>
                    <Link to="/">BACK</Link>
                </div>
                <div className='photos-box'>
                    <img src={process.env.PUBLIC_URL + "/nikon-3.JPG"} className="still-image-contact" />
                    <img src={process.env.PUBLIC_URL + "/sbb.jpg"} className="still-image-contact" />
                </div>
            </div>
        </div >
    );
}

export default Contact;