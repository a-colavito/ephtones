import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import '../Navbar/Navbar.css'; 

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li className="links">
                <Link to="/home">
                        HOME
                    </Link>
                    <Link to="/about">
                        ABOUT
                    </Link>
                    <Link to="/store">
                        STORE
                    </Link>
                    <Link to="/events">
                        EVENTS
                    </Link>
                </li>
                <li className="icons">
                    <Link to="https://www.instagram.com/ephtones/" >
                        <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                    <Link to="https://facebook.com">
                        <FontAwesomeIcon icon={faFacebook} />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
