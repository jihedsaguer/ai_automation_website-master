import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Portfolio } from '../pages/Portfolio';
import { Footer } from "../components/layout/footer.tsx";
import ServicesPage from '../pages/Services';
import ServiceDetails from '../pages/ServiceDetails';
import {About} from "../pages";
import Partners from "../pages/Partners.tsx";
import Contact from "../pages/Contact";
import Team from "../pages/Team";
const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:id" element={<ServiceDetails />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
        </Routes>
    );
};

export default AppRoutes;

