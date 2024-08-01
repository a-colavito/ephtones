import React from 'react';
import { ReactTyped } from "react-typed";

const HomePage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-200">
            <h1 className="text-5xl font-extrabold text-center text-red-700">
                <ReactTyped 
                    strings={["EPHTONES"]}
                    typeSpeed={300}
                    backSpeed={20}
                    cursorChar=' | '
                    showCursor={true}
                />
            </h1>
        </div>
    );
}

export default HomePage;
