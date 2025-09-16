import React from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import AccordionSlider from './components/AccordionSlider';

function App() {
  return (
    <div className="App d-flex flex-column">
      <Navbar />
      <AccordionSlider />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;