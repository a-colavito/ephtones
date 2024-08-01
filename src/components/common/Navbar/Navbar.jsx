import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube, faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
    return (
        <nav className="bg-slate-50 p-4 border-b-2 border-red-700">
            <ul className="flex justify-between items-center">
                <li className="flex space-x-4">
                    <Link to="/home" className="text-dark hover:text-red-700">HOME</Link>
                    <Link to="/about" className="text-dark hover:text-red-700">ABOUT</Link>
                    <Link to="/store" className="text-dark hover:text-red-700">STORE</Link>
                    <Link to="/events" className="text-dark hover:text-red-700">EVENTS</Link>
                </li>
                <li className="flex space-x-4">
                    <a href="https://www.instagram.com/ephtones/" className="text-dark hover:text-purple-400">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.youtube.com/@Ephtones" className="text-dark hover:text-red-600">
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                    <a href="https://www.beatstars.com/ephtones" className="text-dark hover:text-red-500">
                        <FontAwesomeIcon icon={faStar} />
                    </a>
                    <a href="https://www.beatstars.com/ephtones" className="text-dark hover:text-green-600">
                        <FontAwesomeIcon icon={faSpotify} />
                    </a>
                    <a href="https://facebook.com" className="text-dark hover:text-blue-600">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
