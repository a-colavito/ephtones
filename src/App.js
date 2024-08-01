import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import HomePage from './pages/HomePage/Homepage';
import OpeningPage from './OpeningPage';
import Layout from './Layout';
import About from './pages/AboutPage/About';

const App = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Router>
                <div className="flex-grow">
                    <Routes>
                        <Route path="/" element={<OpeningPage />} /> 
                        <Route path="/home" element={<Layout><HomePage /></Layout>}></Route>
                        <Route path="/about" element={<Layout><About /></Layout>}></Route>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
