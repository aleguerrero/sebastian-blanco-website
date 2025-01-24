// import './Header.css'
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <ul className='header-ul'>
                <div className='header-name'>
                    <li><Link to="/">SEBASTIAN BLANCO</Link></li>
                </div>
            </ul>
            <ul className='header-menu'>
                <li><Link to="/about">WORK</Link></li>
                <li><Link to="/work">STILLS</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
            </ul>
        </div>
    )
}

export default Header;