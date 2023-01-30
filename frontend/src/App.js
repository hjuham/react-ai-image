import React from 'react';
import { Routes, Route } from "react-router-dom";
import ImageGenerator from './components/ImageGenerator';
import Banner from './components/Banner';
import Home from './components/Home';
import CompletionGenerator from './components/CompletionGenerator';
import EditGenerator from './components/EditGenerator'
import Footer from './components/Footer'

function App() {

    return (
        <div className="App">
            <Banner />
            <Routes>
                <Route path="/imagegenerator" element={<ImageGenerator />} />
                <Route path="/" element={<Home />} />
                <Route path="/completiongenerator" element={<CompletionGenerator />} />
                <Route path="/editgenerator" element={<EditGenerator />} />
            </Routes>
            <Footer />
        </div >
    );
}

export default App;
