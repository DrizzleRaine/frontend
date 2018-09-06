import React, { Component } from 'react';
import './Stats.css'

class Stats extends Component {

  render() {
    return !!this.props.hp ? (
      <div className="stat-block">
        <h2>Stats</h2>
        <label>HP</label><span>{this.props.hp  || '?' } / {this.props.hp || '?' }</span>
        <label title="Strength">STR</label><span>{this.props.str || '?' }</span>
        <label title="Dexterity">DEX</label><span>{this.props.dex || '?' }</span>
        <hr />
        <label title="Weapon">WPN</label><span>Dagger</span>
        <label title="Weapon Attack">ATK</label><span>2d4</span>
      </div>
    ) : (<div className="stat-block">
      <h2><code>Unknown Stats</code></h2>
    </div>)
  }

}

export default Stats;
