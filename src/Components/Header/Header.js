import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-container-block'>
                <div className='header-name-container'>
                    <div className='header-text-block'>
                        <NavLink to="/" className={"header-name-block"}>
                            Sebastian Blanco
                        </NavLink>
                    </div>
                </div>
                <div className='header-misc-container'>
                    <div className='header-text-block'>
                        Director of Photography
                    </div>
                    <div className='links-block'>
                        <div className='header-text-block'>
                            <a href="https://www.instagram.com/sebstnblanco/" target="_blank" rel="noreferrer" className='header-link-block'>Instagram</a>, 
                        </div>
                        <div className='header-text-block'>
                            <a href="https://vimeo.com/sebastianblanco" target="_blank" rel="noreferrer" className='header-link-block'>Vimeo</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;