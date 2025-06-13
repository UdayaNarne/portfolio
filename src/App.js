import './App.css';
import Navbar from './components/Navbar';
import Connect from './components/Connect';
import About from './components/About';
import Home  from './components/Home';
import Projects from './components/Projects';
import DSA from './components/DSA';
import Sidebar from './components/Sidebar';
import Skills from './components/Skills';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Sidebar/>
        <section id="home">
          <Home/>
        </section>
        <section id="about">
          <About/>
        </section>
        <section id="projects">
          <Projects/>
        </section>
        <section id="profiles">
          <DSA/>
        </section>
        <section id="skills">
          <Skills/>
        </section>
        <section id="connect">
          <Connect/>
        </section>
    </div>
  );
}

export default App;
