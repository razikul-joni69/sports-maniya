import React from 'react';
import header from './headerbg.jpg'
import './Header.css'

const Header = () => {
    return (
        <div className="header-background">
            <img src={header} alt="bg pic"/>
            <h1 className="text-center text-primary">Play with Soul</h1>
            <h4 className="text-center text-warning">Know about your favorite team </h4>
        </div>
    );
};

export default Header;