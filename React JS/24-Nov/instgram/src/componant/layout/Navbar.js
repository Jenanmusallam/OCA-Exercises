import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Images/InstagramLogo.png';
import jenan from '../../Images/jenan.jpg'

function Nav() {
    const navStyle = {
        color: '#262626'
    };

    return (
        <nav className="container">
            <Link style={navStyle} to="/">
                <img src={Logo} alt="Instagram" className="logoInstgram" to="/Profile" />
            
                 </Link>
            <div className="search">
                <i class="fas fa-search">  Search </i>
            </div>
            <ul className="nav-links">
                <Link style={navStyle} to="/">
                    <li>
                        {/* <i class="fas fa-home"></i> */}
                        <svg aria-label="Home" class="_8-yf5 fas" fill="#262626" height="25" viewBox="0 0 48 48" width="25"><path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z"></path></svg></li>
                </Link>
                <li><i class="far fa-paper-plane"></i></li>
                <li><i class="far fa-compass"></i></li>
                <li><i class="far fa-heart"></i></li>
                <Link style={navStyle} to="/Profile">
                    <img src={jenan} alt="jenan" className="logoUser" />
                    {/* <li><i class="far fa-user"></i></li> */}
                </Link>
            </ul>
        </nav>
    )
};

export default Nav;