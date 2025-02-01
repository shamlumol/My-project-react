import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Skills from './Components/Skills';

function App() {
  return (
    <div>
      <Header />
      <div style={{ 
        backgroundColor: '#083445', 
        color: 'white', 
        padding: '20px',
        margin: '50px auto',
        width: '90%',
        height: '83vh', 
        overflowY: 'auto', 
        boxShadow:' 1px 3px 10px 1px  rgb(37, 37, 37)'

      }}>
        <section className='rounded' id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="Skills">
          <Skills />
        </section>
        <section id="projects">
          <Project />
        </section>
        <section id="contact">
          <Contact />
        </section>
       
      </div>
      <section id="footer">
          <Footer />
        </section>
    </div>
  );
}

export default App;