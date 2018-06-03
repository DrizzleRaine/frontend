import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="stats">Stats</div>
        <div className="battle">Fight fight fight!</div>
        <div className="map">Map (x:0, y:0)</div>
        <div className="unused">Unused</div>
      </div>
    );
  }
}

export default Main;
