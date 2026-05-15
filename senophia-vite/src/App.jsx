import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Members from './components/Members';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import './styles/GlobalStyles.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          {"SENOPHIA".split("").map((letter, i) => (
            <div key={i} className="loading-letter">{letter}</div>
          ))}
        </div>
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="app">
        <CustomCursor />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Members />
          <Experience />
          <Gallery />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;