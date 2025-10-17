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
                <p className='contact-text'>Sebastian Blanco is a Director of Photography from Costa Rica, based in Mexico City
                    {process.env.REACT_APP_LA_MODE === "1" ? (
                       "."  
                    ) : (
                        " & Los Angeles."
                    )}</p>
                <table className='contact-table'>
                    <tr>
                        <td className='contact-table-title'>CLIENTS & PRODUCTION COMPANIES</td>
                        <td className='contact-table-text'>Dior, Spotify, Corona, LANDIA, The LIFT, Amazon Prime, The Maestros, Chevrolet, Sony Music, adidas Originals.</td>
                    </tr>
                    <tr>
                        <td className='contact-table-title'>EMAIL</td>
                        <td className='contact-table-text'><a href="mailto:sebastianblancodp@gmail.com">sebastianblancodp@gmail.com</a></td>
                    </tr>
                </table>
                {width <= 768 && (
                    <div className='contact-links'>
                        <div className='instagram-logo'>
                            <a href="https://www.instagram.com/sebastianblancodp/" target="_blank" rel="noreferrer"> <img src={process.env.PUBLIC_URL + "/instagramlogo.png"} alt="instagram" /></a>
                        </div>
                        <div className='vimeo-logo'>
                            <a href="https://vimeo.com/sebastianblanco" target="_blank" rel="noreferrer"> <img src={process.env.PUBLIC_URL + "/vimeologo.png"} alt="vimeo" /></a>
                        </div>
                    </div>
                )}
                <div className='contact-back-button'>
                    <Link to="/">BACK</Link>
                </div>
            </div>
        </div >
    );
}

export default Contact;