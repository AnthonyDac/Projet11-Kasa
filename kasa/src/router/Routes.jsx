// Routes.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Homepage/HomePage';
import AboutPage from '../pages/About/AboutPage';
import NotFoundPage from '../pages/404/404Page';

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/404" element={<NotFoundPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;
