import React from 'react';
import './App.css';
import Home from './containers/Home/Home';
import AboutMe from './containers/About Me/AboutMe';
import Projects from './containers/Projects/Projects';

function App() {
  return (
    <div className="row App container">
      <Home />
      <AboutMe />
      <Projects/>
    </div>
  );
}

export default App;
