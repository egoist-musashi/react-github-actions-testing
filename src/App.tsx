import React from "react";
import './App.css';

const App: React.FC = () => {
  const currentTime = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
      <div className="App">
        <header className="App-header">
          <h1> Welcome to the react app - loaded at {currentTime}</h1>
          <p> This is a test react app deployed via github actions</p>
        </header>
      </div>
  );
};

export default App;