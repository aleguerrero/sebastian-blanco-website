// import './Header.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ selected, setSelectedVideoHeader, hoveredProject, setSelectedVideo }) => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    function handleWindowsSizeChange() {
        setIsMobile(window.innerWidth);
    }

    useEffect(() => {

        window.addEventListener('resize', handleWindowsSizeChange);

        return () => {
            window.removeEventListener('resize', handleWindowsSizeChange);
        }


    }, []);

    const handleHeaderClick = () => {
        setSelectedVideoHeader(false);
        setSelectedVideo(null);
    }

    return (
        <div className={`header-container ${selected ? 'selected' : ''}${isMobile ? 'mobile' : ''}`}
            style={{
                backgroundColor: hoveredProject ? `transparent` : '',
            }}>
            {isMobile ? (
                <div>
                    <ul className='header-ul'>
                        <div className={`header-name`}>
                            <li onClick={handleHeaderClick}>
                                <Link to="/">
                                    <p className='name gfs-didot-regular'>SEBASTIÁN BLANCO</p>
                                    <p className='dp-title'>DIRECTOR OF PHOTOGRAPHY</p>
                                </Link>
                            </li>
                        </div>
                    </ul>
                    <div className='header-block'>
                        <ul className='header-menu'>
                            <div>
                                <li onClick={handleHeaderClick}><Link to="/">WORK</Link></li>
                                <li onClick={handleHeaderClick}><Link to="/stills">STILLS</Link></li>
                                <li onClick={handleHeaderClick}><Link to="/contact">CONTACT</Link></li>
                            </div>
                        </ul>
                    </div>
                </div>
            ) : (
                <div className='header-block'>
                    <ul className='header-menu'>
                        <div>
                            <li onClick={handleHeaderClick}><Link to="/">SELECTED WORK</Link></li>
                            <li onClick={handleHeaderClick}><Link to="/commercial">COMMERCIAL</Link></li>
                            <li onClick={handleHeaderClick}><Link to="/music_videos">MUSIC VIDEOS</Link></li>
                            <li onClick={handleHeaderClick}><Link to="/stills">STILLS</Link></li>
                            <li onClick={handleHeaderClick}><Link to="/contact">CONTACT</Link></li>
                        </div>

                    </ul>
                    <ul className='header-ul'>
                        <div className={`header-name`}>
                            <li onClick={handleHeaderClick}>
                                <Link to="/">
                                    <p className='name gfs-didot-regular'>SEBASTIÁN BLANCO</p>
                                    <p className='dp-title'>DIRECTOR OF PHOTOGRAPHY</p>
                                </Link>
                            </li>
                        </div>
                    </ul>
                    <ul className='header-links'>
                        <div className='instagram-logo'>
                            <a href="https://www.instagram.com/sebstnblanco/" target="_blank" rel="noreferrer"> <img src={process.env.PUBLIC_URL + "/instagramlogo.png"} className={`${selected ? 'invert' : ''}`} alt="instagram" /></a>
                        </div>
                        <div className='vimeo-logo'>
                            <a href="https://vimeo.com/sebastianblanco" target="_blank" rel="noreferrer"> <img src={process.env.PUBLIC_URL + "/vimeologo.png"} alt="vimeo" className={`${selected ? 'invert' : ''}`} /></a>
                        </div>
                    </ul>
                </div>
            )
            }
        </div>
    );
}
export default Header;