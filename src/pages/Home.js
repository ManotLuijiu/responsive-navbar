import React, { Component } from 'react';
import './Home.css';
import Card from '../components/Cards/Card';

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container-home">
        <h2>
          <label className="home-label">
            Do you find someone that work for you?
          </label>
        </h2>
        <h1>Run business without tedious paper job</h1>
        <Card />
      </div>
    );
  }
}

export default Home;
