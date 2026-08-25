import './Contact.css';
import { useState, useEffect } from 'react';

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
                {width <= 768 && (
                    <div className='photos-container'>
                        <div className='photos-box'>
                            <img alt="photo1" src={process.env.PUBLIC_URL + "/nikon-3.JPG"} className="still-image-contact" />
                            <img alt="photo2" src={process.env.PUBLIC_URL + "/sbb.jpg"} className="still-image-contact" />
                        </div>
                        <div className='representative-box times-text'>
                            <div className='rep-title-box'>
                                <div className=' rep-title'>Represented by</div> <img alt="logoborn" src={process.env.PUBLIC_URL + "/logoborn.svg"} className='logo-born'></img>
                            </div>
                            <div className='rep-info-box'>
                                <div className=''>Xavier Mari</div>
                                <div className=''><a href="mailto:za@lagence.tv" className=''>za@lagence.tv</a></div>
                                <div className=''><a href="tel:+55 11 99695-7401" className=''>+55 11 99695-7401</a></div>
                            </div>
                        </div>
                    </div>
                )}
                <table className='contact-table'>
                    <tr>
                        <td className='contact-table-title courier'>BIO</td>
                        <td className='contact-table-text'>Sebastián Blanco is a Costa Rican Director of Photography and Photographer based between Mexico City and Los Angeles. His visual language was shaped through skateboarding, documenting his surroundings and close collaborators. He works across music videos, narrative, and commercial projects. He was part of the ASC Vision Mentorship Program (2023–2024).</td>
                    </tr>
                    <tr>
                        <td className='contact-table-title courier'>CLIENTS & PRODUCTION COMPANIES</td>
                        <td className='contact-table-text'>adidas Originals, Ford, Corona, New Balance, Dior, Sony Music, Uber, Chevrolet & Stink Films, LANDIA, The LIFT, Violeta Films, Another Video</td>
                    </tr>
                    <tr>
                        <td className='contact-table-title courier'>DIRECTORS</td>
                        <td className='contact-table-text'>Chris Cadaver & Julian Burgueno, Sam Youkilis, Sebas Coto, Angie Bárcenas, Kevin Rosales</td>
                    </tr>
                    <tr>
                        <td className='contact-table-title courier'>EMAIL</td>
                        <td className='contact-table-text'><a href="mailto:sebastianblancodp@gmail.com">sebastianblancodp@gmail.com</a></td>
                    </tr>
                    <tr>
                        <td className='contact-table-title courier'>SOCIALS</td>
                        <td className='contact-table-text'><a href="https://www.instagram.com/sebstnblanco/" target="_blank" rel="noreferrer">Instagram</a> and <a href="https://vimeo.com/sebastianblanco" target="_blank" rel="noreferrer">Vimeo</a></td>
                    </tr>
                    <tr>
                        <td className='contact-table-title courier'>PRESS</td>
                        <td className='contact-table-text'>
                            <ul>
                                <li><a href="https://www.nowness.com/series/just-dance/a-machine-that-trembles-rebeca-becerra-cusi-cesar-brodermann" target="_blank" rel="noreferrer">NOWNESS</a></li>
                                <li><a href="https://www.directory.work/" target="_blank" rel="noreferrer">DIRECTORY WORK</a></li>
                                <li><a href="https://directorslibrary.com/2020/latest/music-videos/aguita-gabriel-garzon-montano/" target="_blank" rel="noreferrer">DIRECTOR’S LIBRARY</a></li>
                                <li><a href="https://delfino.cr/2025/11/talento-costarricense-director-de-fotografia-sebastian-blanco-suma-nuevo-reconocimiento-en-nowness" target="_blank" rel="noreferrer">DELFINOCR</a></li>
                            </ul>
                        </td>
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

                {width >= 768 && (
                    <div className='photos-container'>
                        <div className='photos-box'>
                            <img alt="photo1" src={process.env.PUBLIC_URL + "/nikon-3.JPG"} className="still-image-contact" />
                            <img alt="photo2" src={process.env.PUBLIC_URL + "/sbb.jpg"} className="still-image-contact" />
                        </div>
                        <div className='representative-box times-text'>
                            <div className='rep-title-box'>
                                <div className=' rep-title'>Represented by</div> <img alt="logoborn" src={process.env.PUBLIC_URL + "/logoborn.svg"} className='logo-born'></img>
                            </div>
                            <div className='rep-info-box'>
                                <div className=''>Xavier Mari</div>
                                <div className=''><a href="mailto:za@lagence.tv" className=''>za@lagence.tv</a></div>
                                <div className=''><a href="tel:+55 11 99695-7401" className=''>+55 11 99695-7401</a></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div >
    );
}

export default Contact;