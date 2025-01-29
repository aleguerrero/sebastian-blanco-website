// import './Header.css'
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({selected, setSelectedVideoHeader, hoveredProject}) => {

    const handleHeaderClick = () => {
        setSelectedVideoHeader(false);
    }

    return (
        <div className={`header-container ${selected ? 'selected' : ''}`}
             style={{
                backgroundColor: hoveredProject ? `transparent` : '',
             }}>
            <div className='header-block'>
                <ul className='header-ul'>
                    <div className={`header-name`}>
                        <li onClick={handleHeaderClick}><Link to="/">SEBASTIAN BLANCO</Link></li>
                    </div>
                </ul>
                <ul className='header-menu'>
                    <li onClick={handleHeaderClick}><Link to="/">WORK</Link></li>
                    <li onClick={handleHeaderClick}><Link to="/stills">STILLS</Link></li>
                    <li onClick={handleHeaderClick}><Link to="/contact">CONTACT</Link></li>
                </ul>
                <ul className='header-links'>
                    <p>Instagram</p>
                    <p>Vimeo</p>
                </ul>
            </div>
        </div>
    )
}

export default Header;