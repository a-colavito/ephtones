import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube, faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import Switcher from "../../../Switcher.js";

const Navbar = () => {
    return (
        <nav className="flex-grow bg-slate-50 p-4 dark:bg-blue-950">
            <ul className="flex justify-between items-center">
                <li className="flex space-x-4">
              
                    <Link to="/home" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-blue-100 hover:text-slate-900 dark:text-slate-50 dark:hover:bg-blue-900">HOME</Link>
                    <Link to="/about" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-blue-100 hover:text-slate-900 dark:text-slate-50 dark:hover:bg-blue-900">ABOUT</Link>
                    <Link to="/store" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-blue-100 hover:text-slate-900 dark:text-slate-50 dark:hover:bg-blue-900">STORE</Link>
                    <Link to="/events" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-blue-100 hover:text-slate-900 dark:text-slate-50 dark:hover:bg-blue-900">EVENTS</Link>
                    <Link to="/contacts" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-blue-100 hover:text-slate-900 dark:text-slate-50 dark:hover:bg-blue-900">CONTACTS</Link>
                    <li className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-blue-100 hover:text-slate-900 dark:text-slate-50 dark:hover:bg-blue-900">
                        <Switcher />
                    </li>
                </li>
               
                <li className="flex space-x-4">
                    <a href="https://www.instagram.com/ephtones/" className="text-xl text-dark hover:text-purple-700 dark:text-slate-50 dark:hover:text-purple-400">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.youtube.com/@Ephtones" className="text-xl text-dark hover:text-red-600 dark:text-slate-50 dark:hover:text-red-600">
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                    <a href="https://www.beatstars.com/ephtones" className="text-xl text-dark hover:text-red-500 dark:text-slate-50 dark:hover:text-red-500">
                        <FontAwesomeIcon icon={faStar} />
                    </a>
                    <a href="https://www.beatstars.com/ephtones" className="text-xl text-dark hover:text-green-600 dark:text-slate-50 dark:hover:text-green-600">
                        <FontAwesomeIcon icon={faSpotify} />
                    </a>
                    <a href="https://facebook.com" className="text-xl text-dark hover:text-blue-600 dark:text-slate-50 dark:hover:text-blue-500">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                   
                   
                </li>
                
            </ul>
        </nav>
    );
}

export default Navbar;
