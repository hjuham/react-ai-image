import React from 'react';
import { Routes, Route } from "react-router-dom";
import ImageGenerator from './components/ImageGenerator';
import Banner from './components/Banner';
import Home from './components/Home';
import CompletionGenerator from './components/CompletionGenerator';


function App() {

    return (
        <div className="App">
            <Banner />
            <Routes>
                <Route path="/imagegenerator" element={<ImageGenerator />} />
                <Route path="/" element={<Home />} />
                <Route path="/completiongenerator" element={<CompletionGenerator />} />
            </Routes>
        </div >
    );
}

export default App;
