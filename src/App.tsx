import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import Edit from "./Edit";
import logo from './logo.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ["YouTube", "GitHub", "Gcal", "Gmail", " Twitter"],
      showbutton: false,
      showButtonIndex: null
    };
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit = e => {
    e.preventDefault();
    this.setState({
      showbutton: true,
      showButtonIndex: Number(e.target.id)
    });
    console.log(this.state)
  };
  render() {
    console.log(this.state.names);
    const { showButtonIndex, showbutton } = this.state;
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
              <button className="buttons">Twitch</button>
              <button className="buttons">test</button>
              <button className="buttons">test</button>
            </div>
            <button className="buttons" id="home">Home</button>
    </div>
  );
}};

export default App;