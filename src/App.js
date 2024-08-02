import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import HomePage from './pages/HomePage/Homepage';
import OpeningPage from './OpeningPage';
import Layout from './Layout';
import About from './pages/AboutPage/About';
import Contacts from './pages/Contacts/Contacts';
import Events from './pages/Events/Events';
import Store from './pages/Store/Store';


const App = () => {
 
    
    return (
   
      
        <div >
            <Router>
                    <Routes>
                        <Route path="/" element={<OpeningPage />} /> 
                        <Route path="/home" element={<Layout><HomePage /></Layout>}></Route>
                        <Route path="/about" element={<Layout><About /></Layout>}></Route>
                        <Route path="/contacts" element={<Layout><Contacts/></Layout>}></Route>
                        <Route path="/events" element={<Layout><Events></Events></Layout>}></Route>
                        <Route path="/store" element={<Layout><Store></Store></Layout>}></Route>
                    </Routes>
            </Router>
        </div>
        

    );
}

export default App;
