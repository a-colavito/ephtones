import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube, faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
    return (
        <nav className="bg-slate-50 p-4 ">
            <ul className="flex justify-between items-center">
                <li className="flex space-x-4">
                    <Link to="/home" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-violet-100 hover:text-slate-9001">HOME</Link>
                    <Link to="/about" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-violet-100 hover:text-slate-9001">ABOUT</Link>
                    <Link to="/store" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-violet-100 hover:text-slate-9001">STORE</Link>
                    <Link to="/events" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-violet-100 hover:text-slate-9001">EVENTS</Link>
                </li>
                <li className="flex space-x-4">
                    <a href="https://www.instagram.com/ephtones/" className="text-xl text-dark hover:text-purple-700">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.youtube.com/@Ephtones" className="text-xl text-dark hover:text-red-600">
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                    <a href="https://www.beatstars.com/ephtones" className="text-xl text-dark hover:text-red-500">
                        <FontAwesomeIcon icon={faStar} />
                    </a>
                    <a href="https://www.beatstars.com/ephtones" className="text-xl text-dark hover:text-green-600">
                        <FontAwesomeIcon icon={faSpotify} />
                    </a>
                    <a href="https://facebook.com" className="text-xl text-dark hover:text-blue-600">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
