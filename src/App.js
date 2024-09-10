import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Destination from './components/Destination';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection />
      <Destination />
      <ContactForm />
       <Footer />
    </div>
  );
}

export default App;