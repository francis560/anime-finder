import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Home from "./pages/Home";
import AnimeInfo from "./pages/AnimeInfo";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const App = () => {
    return (
        <BrowserRouter>

            <Navbar />

            <Routes>

                <Route path="/" element={<Home />} exact /> 

                <Route path="/anime/:id" element={<AnimeInfo />} />

            </Routes>

            <Footer />

        </BrowserRouter>
    );
}


export default App;