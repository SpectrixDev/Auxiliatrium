import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  document.body.style.overflow = "hidden"
  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
      <div className="animate__animated animate__fadeIn">
        <header className="header">
          <img draggable="false" src={logo} className="logo" alt="logo" />
        </header>
          <div className="searchArea">
            <input className="search" type="text" placeholder="Search..." />
            </div>
          </div>
            <br />
            <button className="expanderButton">^</button>
            <br />
            <div className="buttons">
              <div className="animate__animated animate__fadeInUp">
                <button>YouTube</button>
                <button>GitHub</button>
                <button>Gcal</button>
                <button>Gmail</button>
                <button>Gmaps</button>
                <button>Twitter</button>
              </div>
          </div>
    </div>
  );
}

export default App;
