import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import PrivacyPolicy from './components/PrivacyPolicy.jsx';
import TermsOfService from './components/TermsOfService.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/privacy" element={<><PrivacyPolicy /><Footer /></>} />
                <Route path="/terms" element={<><TermsOfService /><Footer /></>} />
                <Route path="/contact" element={<><Contact /><Footer /></>} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);
