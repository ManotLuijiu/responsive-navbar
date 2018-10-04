import React from 'react';
import './WebDesign.css';
import DesignServices from '../../images/webdesign2.png';

const webdesign = props => (
  <div className="page-webdesign" id="showcase-design">
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-md-6 col-lg-4 mb-5">
          <img src={DesignServices} className="img-fluid" alt="webdesign" />
        </div>
        <div className="col-md-6 col-lg-8 py-5" id="design-main">
          <h1 className="py-3">
            Better choice to start business in digital world.
          </h1>
          <p className="text-center">
            What is your dream, get your dream come true. Let's do it together.
          </p>
          <button type="button" className="btn btn-info my-2">
            Start up business
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default webdesign;
