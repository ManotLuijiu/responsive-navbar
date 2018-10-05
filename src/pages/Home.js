import React, { Component } from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StartUp from '../images/startup2.png';
import WebDesign from '../components/WebDesign/WebDesign';
import Technology from '../components/Technology/Technology';
import MyGoogleMap from '../components/GoogleMap/GoogleMap';

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="container-fluid" id="showcase">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-6 py-5" id="home-main">
              <h1 className="py-3">
                Better choice to start business in digital world.
              </h1>
              <p className="text-center">
                What is your dream, get your dream come true. Let's do it
                together.
              </p>
              <button type="button" className="btn btn-info my-2">
                Start up business
              </button>
            </div>
            <div className="col-lg-4 col-md-6 mb-5">
              <img src={StartUp} className="img-fluid" alt="startup" />
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
                  <h5 className="card-title">Taxation &amp; Bookkeeping</h5>
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
                  <h5 className="card-title">Executive Reports</h5>
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
                  <h5 className="card-title">IT Infrastructure</h5>
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
        <WebDesign />
        <Technology />
        <MyGoogleMap />
      </div>
    );
  }
}

export default Home;
