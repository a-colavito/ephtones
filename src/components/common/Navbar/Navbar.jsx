import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube, faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
    return (
        <nav className="bg-gray-700 p-4">
            <ul className="flex justify-between items-center">
                <li className="flex space-x-4">
                    <Link to="/home" className="text-white hover:text-gray-400">HOME</Link>
                    <Link to="/about" className="text-white hover:text-gray-400">ABOUT</Link>
                    <Link to="/store" className="text-white hover:text-gray-400">STORE</Link>
                    <Link to="/events" className="text-white hover:text-gray-400">EVENTS</Link>
                </li>
                <li className="flex space-x-4">
                    <a href="https://www.instagram.com/ephtones/" className="text-white hover:text-gray-400">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.youtube.com/@Ephtones" className="text-white hover:text-gray-400">
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                    <a href="https://www.beatstars.com/ephtones" className="text-white hover:text-gray-400">
                        <FontAwesomeIcon icon={faStar} />
                    </a>
                    <a href="https://www.beatstars.com/ephtones" className="text-white hover:text-gray-400">
                        <FontAwesomeIcon icon={faSpotify} />
                    </a>
                    <a href="https://facebook.com" className="text-white hover:text-gray-400">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
