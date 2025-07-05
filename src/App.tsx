import React from 'react';
import { ThemeProvider } from './components/theme-provider';
import Navbar from './components/layout/Navbar';
import AppRoutes from './routes/AppRoutes';
import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from './components/ui/toaster';
import {Footer} from './components/layout/footer';

const App: React.FC = () => {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Router>
                <div className="relative min-h-screen">
                    <div className="page-background" />
                    <Navbar />
                    <main className="pt-16">
                        <div className="container">
                            <AppRoutes />
                        </div>
                    </main>
                    <Footer />
                    <Toaster />
                </div>
            </Router>
        </ThemeProvider>
    );
};

export default App;

