import React, { Component } from 'react';
import { perform } from '../API'
import './Main.css';
import Login from './Login.js';
import db from '../store'


class Main extends Component {

  state = {
    player: null,
    message: ''
  }

  async move(direction) {
    let results = await perform('move', {direction}).then(res => res.json())
    if(results.ok) {
      this.setState({player: results.player, message: results.message})
    }
  }

  render() {
    return (
      <div className="main-container">
        <div className="stats">
          Stats
          <Login onLogin={player => this.setState({player})} />
        </div>
        <div className="battle">
          <span>Fight fight fight!</span>
        </div>
        <div className="map">
          {this.state.player && this.state.player.location ?
            <div className="location">Map (x:{this.state.player.location[0]}, y:{this.state.player.location[1]})</div> :
            false}
          <div className="navigation">
            <button onClick={event => this.move('west')}>West</button>
            <button onClick={event => this.move('north')}>North</button>
            <button onClick={event => this.move('south')}>South</button>
            <button onClick={event => this.move('east')}>East</button>
          </div>
        </div>
        <div className="unused">{JSON.stringify(this.state.player)} {JSON.stringify(this.state.message)}</div>
      </div>
    );
  }
}

export default Main;
