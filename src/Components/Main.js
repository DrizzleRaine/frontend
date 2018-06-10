import React, { Component } from 'react';
import './Main.css';

class Main extends Component {

  state = {
    character: {
      name: 'Gregory',
      location: [0,0]
    }
  }

  /**
   * Perform an action on the server
   * @param {string} action The reducer to run on the server.
   * @param {object} parameters Passed directly to the server
   * @return {Promise} The HTTP request
   */
  perform(action, parameters) {
    const request = fetch(`//localhost:8080/perform/${action}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(parameters)
    });
    request
      .then(res => res.json())
      .then(character => {
        this.setState({character})
      })
      .catch(err => console.error(`🚨 Error when performing "${action}"\n`, err))
    // return the original promise so that consumers can see the status code
    return request
  }

  render() {
    return (
      <div className="main-container">
        <div className="stats">Stats</div>
        <div className="battle">
          <span>Fight fight fight!</span>
        </div>
        <div className="map">
          <div className="location">Map (x:{this.state.character.location[0]}, y:{this.state.character.location[1]})</div>
          <div className="navigation">
            <button onClick={event => this.perform('move', {direction:'west'})}>West</button>
            <button onClick={event => this.perform('move', {direction:'north'})}>North</button>
            <button onClick={event => this.perform('move', {direction:'south'})}>South</button>
            <button onClick={event => this.perform('move', {direction:'east'})}>East</button>
          </div>
        </div>
        <div className="unused">{JSON.stringify(this.state.character)}</div>
      </div>
    );
  }
}

export default Main;
