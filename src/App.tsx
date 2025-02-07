import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Internships from './pages/Internships';
import CloudInfra from './pages/Services/CloudInfra';
import DevOps from './pages/Services/DevOps';
import FinOps from './pages/Services/FinOps';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0A0A0F] text-white flex flex-col">
        <Header />
        <main className="flex-grow pt-20">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/internships" element={<Internships />} />
              <Route path="/services/cloud-infrastructure" element={<CloudInfra />} />
              <Route path="/services/devops" element={<DevOps />} />
              <Route path="/services/finops" element={<FinOps />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;