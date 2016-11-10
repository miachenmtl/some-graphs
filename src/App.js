import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import './App.css';
import PlotContainer from './PlotContainer.js'
import HeatMapContainer from './HeatMapContainer.js'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Jumbotron>
          <h2>Some Graphs</h2>
        </Jumbotron>
        <PlotContainer />
        <HeatMapContainer />
      </div>
    );
  }
}

export default App;
