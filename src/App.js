import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import './styles.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set loading time to 6 seconds (6000ms)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {isLoading ? (
        <div className="loader">
          <div className="progress-bar"></div>
          <p>TOMS CAMP 2025 🥳</p>
        </div>
      ) : (
        <>
          <Header />
          <MainSection />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;