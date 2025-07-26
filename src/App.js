import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import './styles.css';

// Scroll to Top Component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [pathname]);

  return null;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="app">
        {isLoading ? (
          <div className="loader">
            <div className="progress-bar"></div>
            <p>TOM CAMP 2025 🥳</p>
          </div>
        ) : (
          <>
            <ScrollToTop />
            <Header />
            <Routes>
              <Route path="/" element={<MainSection />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;