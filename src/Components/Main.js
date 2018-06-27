import React, { Component } from 'react';
import './Main.css';
import Login from './Login.js';

const uri = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:8080'

class Main extends Component {

  state = {
    player: null
  }

  /**
   * Perform an action on the server
   * @param {string} action The reducer to run on the server.
   * @param {object} parameters Passed directly to the server
   * @return {Promise} The HTTP request
   */
  perform(action, parameters) {
    const request = fetch(`${uri}/perform/${action}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(parameters),
      credentials: 'include'
    });
    request
      .then(res => res.json())
      .then(state => {
        this.setState(state) // HACK: merge it better than this
      })
      .catch(err => console.error(`🚨 Error when performing "${action}"\n`, err))
    // return the original promise so that consumers can see the status code
    return request
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
            <button onClick={event => this.perform('move', {direction:'west'})}>West</button>
            <button onClick={event => this.perform('move', {direction:'north'})}>North</button>
            <button onClick={event => this.perform('move', {direction:'south'})}>South</button>
            <button onClick={event => this.perform('move', {direction:'east'})}>East</button>
          </div>
        </div>
        <div className="unused">{JSON.stringify(this.state.player)} {JSON.stringify(this.state.message)}</div>
      </div>
    );
  }
}

export default Main;
