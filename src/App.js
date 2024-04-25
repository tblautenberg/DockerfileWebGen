import React from 'react';
import DockerfileGenerator from './DockerfileGenerator';
import ParticlesComponent from './components/particles';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dockerfile Generator</h1>
      </header>
      <div className="container">
        <DockerfileGenerator className="dockerfile-generator" />
        <ParticlesComponent id="particles" />
      </div>
    </div>
  );
}

export default App;
 