import React from 'react';
import logo from '../../images/HeaderImage.jpg'
import './header.css'

const Header = () => {
    return (
        <div className = "header">
            <img src={logo} alt=""/>
        </div>
    );
};

export default Header;