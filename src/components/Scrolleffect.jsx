import React, { useEffect, useRef, useState, useContext } from 'react';
import { ItemContext } from '../context/itemContext';
import Sidebar from './Sidebar';
import Connect from './Connect';
import About from './About';
import Home from './Home';
import Projects from './Projects';
import DSA from './DSA';
import Skills from './Skills';

const sections = ['home', 'about', 'projects', 'profiles', 'skills', 'connect'];

export default function ScrollSpySidebar() {
  const sectionRefs = useRef({}); // Important!
  const [activeSection, setActiveSection] = useState("home");
  const { setItem } = useContext(ItemContext);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter(entry => entry.isIntersecting);
        if (visibleSections.length === 0) return;

        const dominant = visibleSections.reduce((prev, curr) =>
          curr.intersectionRatio > prev.intersectionRatio ? curr : prev
        );

        const newId = dominant.target.id;
        if (newId !== activeSection) {
          setActiveSection(newId);
          setItem(newId);  // Sync with sidebar
        }
      },
      {
        //threshold: Array.from({ length: 101 }, (_, i) => i / 100),
        threshold:0.6
      }
    );

    sections.forEach(id => {
      const el = sectionRefs.current[id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeSection, setItem]);

  return (
    <>
      <Sidebar />
      <section id="home" ref={el => (sectionRefs.current['home'] = el)}>
        <Home />
      </section>
      <section id="about" ref={el => (sectionRefs.current['about'] = el)}>
        <About />
      </section>
      <section id="projects" ref={el => (sectionRefs.current['projects'] = el)}>
        <Projects />
      </section>
      <section id="profiles" ref={el => (sectionRefs.current['profiles'] = el)}>
        <DSA />
      </section>
      <section id="skills" ref={el => (sectionRefs.current['skills'] = el)}>
        <Skills />
      </section>
      <section id="connect" ref={el => (sectionRefs.current['connect'] = el)}>
        <Connect />
      </section>
    </>
  );
}
