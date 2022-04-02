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
            <div className="animate__animated animate__fadeInUp">
              <button className="buttons">YouTube</button>
              <button className="buttons">GitHub</button>
              <button className="buttons">Gcal</button>
              <button className="buttons">Gmail</button>
              <button className="buttons">Gmaps</button>
              <button className="buttons">Twitter</button>
            </div>
            <div className="secondRowButtons">
              <button className="buttons">Reddit</button>
              <button className="buttons">Last.fm</button>
              <button className="buttons">test</button>
              <button className="buttons">test</button>
              <button className="buttons">test</button>
            </div>
    </div>
  );
}

export default App;
