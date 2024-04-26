import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';

function Header() {
    const [menutoggle, setMenutoggle] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setLoggedIn(true);
            console.log("loggedin");
        } else {
            setLoggedIn(false);
        }
    }, []);

    const Toggle = () => {
        setMenutoggle(!menutoggle);
    };

    const closeMenu = () => {
        setMenutoggle(false);
    };

    return (
        <div className="header">
            <div className="logo-nav">
                <Link to="/">
                    <a href="#home">LIBRARY</a>
                </Link>
            </div>
            <div className="nav-right">
                <input className="search-input" type="text" placeholder="Search a Book" />
                <ul className={menutoggle ? 'nav-options active' : 'nav-options'}>
                    <li className="option" onClick={closeMenu}>
                        <Link to="/">
                            <a href="#home">Home</a>
                        </Link>
                    </li>
                    <li className="option" onClick={closeMenu}>
                        <Link to="/books">
                            <a href="#books">Books</a>
                        </Link>
                    </li>
                    {!loggedIn && (
                        <li className="option" onClick={closeMenu}>
                            <Link to="/signin">
                                <a href="signin">SignIn</a>
                            </Link>
                        </li>
                    )}
                </ul>
            </div>

            <div className="mobile-menu" onClick={Toggle}>
                {menutoggle ? (
                    <ClearIcon className="menu-icon" style={{ fontSize: 40 }} />
                ) : (
                    <MenuIcon className="menu-icon" style={{ fontSize: 40 }} />
                )}
            </div>
        </div>
    );
}

export default Header;
