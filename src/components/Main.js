import React, { Component } from 'react';
import { perform } from '../API'
import './Main.css';
import Login from './Login.js';
import Stats from './Stats.js';
import db from '../store'


class Main extends Component {

  state = {
    player: null,
    message: []
  }

  async move(direction) {
    let results = await perform('move', {direction}).then(res => res.json())
    if(results.ok) {
      this.setState({player: results.player, message: this.state.message.concat(this.state.message.length > 0 ? <hr/> : false, results.message)})
      this.scrollDownLog()
    }
  }

  scrollDownLog() {
    this.log.scrollTop = this.log.scrollHeight
  }

  render() {
    return (
      <div className="main-container">
        <div className="stats">
          <Stats {...this.state.player} />
        </div>
        <div className="battle">
          <span>Fight fight fight!</span>
        </div>
        <div className="map">
          {this.state.player && this.state.player.location ?
            <div className="location">Map (x:{this.state.player.location[0]}, y:{this.state.player.location[1]})</div> :
            false}
          <div className="navigation">
            <button className="west" onClick={event => this.move('west')}>West</button>
            <button className="north" onClick={event => this.move('north')}>North</button>
            <button className="south" onClick={event => this.move('south')}>South</button>
            <button className="east" onClick={event => this.move('east')}>East</button>
          </div>
        </div>
        <div className="unused" ref={el => this.log = el}>
          {this.state.message.map(m => {
            return <p>{m}</p>
          })}
        </div>
        <div className="account"><Login onLogin={player => this.setState({player})} /></div>
      </div>
    );
  }
}

export default Main;
