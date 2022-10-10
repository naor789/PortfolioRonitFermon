import './App.css';
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project1Content from './components/Project1Content';
import Project2Content from './components/Project2Content';
import Project1Content2 from './components/Project1Content2';
import Project2Content2 from './components/Project2Content2';
import Project3 from './components/Project3';
import Project4 from './components/Project4';
import MoreProjects from './components/MoreProjects';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Project1 />
      <Project1Content />
      <Project1Content2 />
      <Project2 />
      <Project2Content2 />
      <Project2Content />
      <Project3 />
      <Project4 />
      <MoreProjects />
    </div>
  );
}

export default App;
