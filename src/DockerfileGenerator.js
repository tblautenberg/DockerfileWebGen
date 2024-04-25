import React, { useState, useEffect } from 'react';
import './DockerfileGenerator.css'; // Import CSS for styling

function DockerfileGenerator() {
  const [version, setVersion] = useState('alpine');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [workdir, setWorkdir] = useState(''); // State for WORKDIR
  const [customCommand, setCustomCommand] = useState(''); // State for custom command
  const [dockerfileContent, setDockerfileContent] = useState('');

  useEffect(() => {
    // Generate Dockerfile content based on user input
    let content = `FROM ${version}:latest\n\n`; // Add a line break after FROM statement

    selectedOptions.forEach(option => {
      content += `${option}\n\n`; // Add option followed by a newline
    });

    setDockerfileContent(content); // Update Dockerfile content
  }, [version, selectedOptions]); // Run this effect whenever inputs change

  const handleOptionSelect = (e) => {
    const optionValue = e.target.value;
    setSelectedOptions(prevOptions => [...prevOptions, optionValue]); // Add the selected option to the array
  };

  const handleAddWorkdir = () => {
    if (workdir.trim() !== '') {
      setSelectedOptions(prevOptions => [...prevOptions, `WORKDIR ${workdir}`]); // Add WORKDIR command to selected options
      setWorkdir(''); // Reset WORKDIR field
    }
  };

  const handleAddCustomCommand = () => {
    if (customCommand.trim() !== '') {
      setSelectedOptions(prevOptions => [...prevOptions, customCommand]); // Add custom command to selected options
      setCustomCommand(''); // Reset custom command field
    }
  };

  const handleDownload = () => {
    // Create a Blob and initiate download
    const blob = new Blob([dockerfileContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Dockerfile';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear the current file?')) {
      setSelectedOptions([]);
      setWorkdir(''); // Reset WORKDIR field
      setCustomCommand(''); // Reset custom command field
    }
  };

  return (
    <div className="dockerfile-generator">
      <h2>Dockerfile Generator</h2>
      <div className="input-group">
        <label htmlFor="version">Version:</label>
        <select
          id="version"
          value={version}
          onChange={(e) => setVersion(e.target.value)}
        >
          <option value="alpine">Alpine</option>
          <option value="debian">Debian</option>
          <option value="ubuntu">Ubuntu</option>
          <option value="centos">CentOS</option>
          <option value="fedora">Fedora</option>
        </select>
      </div>

      <div className="input-group">
        <label htmlFor="selectedOption">Would you like to update your image?</label>
        <select
          id="selectedOption"
          value=""
          onChange={handleOptionSelect}
        >
          <option value="">Select option</option>
          <option value="RUN apt-get update">Update system</option>
        </select>
      </div>

      <div className="input-group">
        <label htmlFor="selectedOption">Pre-installed programs for your {version} system</label>
        <select
          id="selectedOption"
          value=""
          onChange={handleOptionSelect}
        >
          <option value="">Select options...</option>
          <option value="RUN apt-get install -y nano">Install Nano</option>
          <option value="RUN apt-get install -y curl">Install Curl</option>
          <option value="RUN apt-get install -y wget">Install Wget</option>
          <option value="RUN apt-get install -y git">Install Git</option>
          <option value="RUN apt-get install -y python3">Install Python3</option>
          <option value="RUN apt-get install -y python3-pip">Install Python3-pip</option>
          <option value="RUN apt-get install -y nodejs">Install Nodejs</option>
          <option value="RUN apt-get install -y npm">Install Npm</option>
          <option value="RUN apt-get install -y gcc">Install Gcc</option>
          <option value="RUN apt-get install -y g++">Install G++</option>
          <option value="RUN apt-get install -y make">Install Make</option>
          <option value="RUN apt-get install -y cmake">Install Cmake</option>
          <option value="RUN apt-get install -y vim">Install Vim</option>
          <option value="RUN apt-get install -y tmux">Install Tmux</option>
          <option value="RUN apt-get install -y htop">Install Htop</option>
          <option value="RUN apt-get install -y tree">Install Tree</option>
          <option value="RUN apt-get install -y java">Install Java</option>
        </select>
      </div>

      <div className="input-group">
        <label htmlFor="workdir">Set WORKDIR:</label>
        <input
          id="workdir"
          type="text"
          value={workdir}
          onChange={(e) => setWorkdir(e.target.value)}
          placeholder="Enter the WORKDIR path"
        />
        <button onClick={handleAddWorkdir}>Add</button>
      </div>

      <div className="input-group">
        <label htmlFor="customCommand">Custom Command:</label>
        <input
          id="customCommand"
          type="text"
          value={customCommand}
          onChange={(e) => setCustomCommand(e.target.value)}
          placeholder="Enter your custom command here"
        />
        <button onClick={handleAddCustomCommand}>Add</button>
      </div>

      <div className="button-group">
        <button onClick={handleDownload}>Download Dockerfile</button>
        <button onClick={handleClear}>Clear Current File</button>
      </div>

      {/* Preview Section */}
      <div className="preview-section">
        <h3>Preview:</h3>
        <pre>{dockerfileContent}</pre>
      </div>
    </div>
  );
}

export default DockerfileGenerator;
