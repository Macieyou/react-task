import React from 'react';
import './NavBar.scss';

const NavBar = ({children}) => {
    return (
        <div className="nav-bar">
            {children}
        </div>
    );
};

export default NavBar;