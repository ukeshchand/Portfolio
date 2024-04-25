import React from 'react';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Projects from '../Pages/Projects';
import Contact from '../Pages/Contact';


const Portfolio = () => {
  return (
    <div>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        < About/>
      </section>
      <section id="projects">
       <Projects/>
      </section>
      <section id="contact">
        <Contact/>
      </section>
    </div>
  );
};

export default Portfolio;
