import React, { Component } from 'react';
import Canvas from './Canvas.js'
import './App.css';
import BQ from './buildAQuest.js'

class App extends Component {
  render() {
    return (
      <div>
        <Canvas />
        <BQ />
      </div>
    )
  }
}

export default App;
