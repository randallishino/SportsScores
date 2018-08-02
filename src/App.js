import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MLB from './Components/MLB_Scoreboard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MLB />
      </div>
    );
  }
}

export default App;
