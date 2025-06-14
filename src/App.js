import './App.css';
import React, { useContext, useEffect } from 'react';
import { ItemContext } from './context/itemContext';
import Navbar from './components/Navbar';
import Connect from './components/Connect';
import About from './components/About';
import Home  from './components/Home';
import Projects from './components/Projects';
import DSA from './components/DSA';
import Sidebar from './components/Sidebar';
import Skills from './components/Skills';
import {ItemProvider} from './context/itemProvider';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';

// function ScrollHandler(){
//   const {item,setItem} = useContext(ItemContext);
//   useEffect(()=>{
//     const handleScroll=()=>{
//       const sections=['home',"about","projects","profiles","skills","connect"];
//       for(let id of sections){
//         const element=document.getElementById(id);
//         if(element){
//           console.log("app:",item);
//           const rect=element.getBoundingClientRect();
//           if(rect.top>=0 && rect.bottom<=window.innerHeight){
//             setItem(id);
//             break;
//           }
//         }
//       }
//     };
//     window.addEventListener('scroll',handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   },[setItem]);
//   return null;
// }

function App() {
  return (
    <div className="App">
      <ItemProvider>
        <Navbar/>
        <Sidebar/>
        {/* <ScrollHandler/> */}
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
      </ItemProvider>
    </div>
  );
}

export default App;
