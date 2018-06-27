import React, { Component } from 'react';

const uri = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:8080'

class Login extends Component {

  state = {
    username: '',
    player: null
  }

  componentDidMount() {
    this.loginStatus();
  }

  loginStatus() {
    return fetch(`${uri}/login`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }).then(res => {
      if(res.status < 400) return res.json()
      else return null
    }).then(user => {
      this.setState({...this.state, player: user})
      if(this.props.onLogin) {
        this.props.onLogin(this.state.player);
      }
    })
  }

  loginAs(username) {
    return fetch(`${uri}/login?user=${username}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }).then(res => this.loginStatus())
  }

  render() {
    if(this.state.player == null) {
      return (
        <div className="login-container">
          <label>Login</label>
          <input type="text" value={this.state.username} onChange={e => this.setState({...this.state, username: e.target.value})} />
          <button onClick={event => this.loginStatus()}>Get Status</button>
          <button onClick={event => this.loginAs(this.state.username)}>Login</button>
        </div>
      );
    } else {
      return (
        <div className="login-container">
          <button onClick={event => {
            this.setState({player: null})
            if(this.props.onLogin) {
              this.props.onLogin(null);
            }
          }}>Logout</button>
        </div>
      )
    }
  }
}

export default Login;
