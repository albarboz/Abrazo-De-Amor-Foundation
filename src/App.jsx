import React from 'react';
// import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import CTA from './components/CTA'
import { ModalProvider } from './contexts/ModalContext';
import AppNavbar from './components/Navbar';


function App() {

  return (
    <ModalProvider>
      <AppNavbar />
      <Hero />
      <Services />
      <About />
      <CTA />
      <Footer />
    </ModalProvider>
  )
}

export default App
