import React from 'react';
import DockerfileGenerator from './DockerfileGenerator';
import ParticlesComponent from './components/particles';
import dockerLogo from './Images/docker.svg';

import './App.css';

function App() {
  return (
<div className="App">
  <header className="App-header">
    <div className="logo-container">
      <img src={dockerLogo} className="App-logo" alt="Docker Logo" />
      <h1> Dockerfile Generator &nbsp; &nbsp;</h1>
    </div>
    <DockerfileGenerator className="dockerfile-generator" />
  </header>
  <div className="container">
    <ParticlesComponent id="particles" />
  </div>
</div>

  );
}

export default App;
 