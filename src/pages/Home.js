import React, { Component } from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="container" id="showcase">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-5 col-md-6" id="home-main">
              <h1>Better choice to start business in digital world.</h1>
              <p>
                Are you concerning about company registration, bookkeeping,
                taxation and IT infrastructure. Don't let these tedious jobs
                obstruct you.
              </p>
              <button>Get those jobs done</button>
            </div>
            <div className="col-lg-6 col-sm-5 offset-sm-2 col-md-6 offset-md-0">
              <FontAwesomeIcon icon="coffee" />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row align-items-center" id="services">
            <div id="tasks" className="col-sm-3 col-md-6 col-lg-3">
              {/* <FontAwesomeIcon icon="tasks" /> */}
              <div
                className="card text-white bg-primary mb-3"
                style={{ maxWidth: '18rem' }}
              >
                <div className="card-header">
                  <FontAwesomeIcon icon="tasks" />
                </div>
                <div className="card-body">
                  <h5 class="card-title">Company Regisration</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div id="calculator" className="col-sm-3 col-md-6 col-lg-3">
              <FontAwesomeIcon icon="calculator" />
              <h4>Taxation &amp; Bookkeeping</h4>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat, quis.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat, quis.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat, quis.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat, quis.
                </li>
              </ul>
            </div>
            <div id="database" className="col-sm-3 col-md-6 col-lg-3">
              <FontAwesomeIcon icon="database" />
              <h4>Administration Reports</h4>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat, quis.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat, quis.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat, quis.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat, quis.
                </li>
              </ul>
            </div>
            <div id="desktop" className="col-sm-3 col-md-6 col-lg-3">
              <FontAwesomeIcon icon="desktop" />
              <h4>IT Infrastructure</h4>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat, quis.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat, quis.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat, quis.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat, quis.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
