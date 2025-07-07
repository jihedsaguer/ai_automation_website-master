import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, About, Contact, Portfolio, Services, Team, Partners, Training } from '@/pages';

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/training" element={<Training />} />
        </Routes>
    );
};

export default AppRoutes;

