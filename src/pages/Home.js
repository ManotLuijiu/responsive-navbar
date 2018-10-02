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
            <div
              id="tasks"
              className="d-flex justify-content-around col-xs-6 col-md-6 col-lg-3"
            >
              <div
                className="card text-white bg-info mb-3"
                style={{ maxWidth: '25rem' }}
              >
                <div className="card-header">
                  <FontAwesomeIcon icon="tasks" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Company Regisration</h5>
                  <ul className="card-text">
                    <li>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Officia, facere.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Officia, facere.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Officia, facere.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Officia, facere.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Officia, facere.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              id="calculator"
              className="d-flex justify-content-around col-xs-6 col-md-6 col-lg-3"
            >
              <div className="card bg-light mb-3" style={{ maxWidth: '25rem' }}>
                <div className="card-header">
                  <FontAwesomeIcon icon="calculator" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Info card title</h5>
                  <ul className="card-text">
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Debitis, incidunt.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Debitis, incidunt.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Debitis, incidunt.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Debitis, incidunt.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Debitis, incidunt.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              id="database"
              className="d-flex justify-content-around col-xs-6 col-md-6 col-lg-3"
            >
              <div
                className="card text-white bg-info mb-3"
                style={{ maxWidth: '25rem' }}
              >
                <div className="card-header">
                  <FontAwesomeIcon icon="database" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Success card title</h5>
                  <ul className="card-text">
                    <li>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Quibusdam, ea.
                    </li>
                    <li>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Quibusdam, ea.
                    </li>
                    <li>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Quibusdam, ea.
                    </li>
                    <li>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Quibusdam, ea.
                    </li>
                    <li>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Quibusdam, ea.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              id="desktop"
              className="d-flex justify-content-around col-xs-6 col-md-6 col-lg-3"
            >
              <div className="card bg-light mb-3" style={{ maxWidth: '25rem' }}>
                <div className="card-header">
                  <FontAwesomeIcon icon="desktop" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Light card title</h5>
                  <ul className="card-text">
                    <li>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Porro, dignissimos!
                    </li>
                    <li>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Porro, dignissimos!
                    </li>
                    <li>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Porro, dignissimos!
                    </li>
                    <li>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Porro, dignissimos!
                    </li>
                    <li>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Porro, dignissimos!
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
