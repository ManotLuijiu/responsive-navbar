import React from 'react';
import './Technology.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const technology = props => (
  <div className="container" id="technology-row">
    <div className="row py-3">
      <div className="col-sm-12 align-middle" id="technology-ic">
        <h3 id="technology-tag">Technology we are using: </h3>
        <a href="/" className="aws-ic">
          <FontAwesomeIcon
            className="fa-lg white-text mr-md-5 mr-3 fa-2x"
            icon={['fab', 'aws']}
          />
        </a>
        <a href="/" className="react-ic">
          <FontAwesomeIcon
            className="fa-lg white-text mr-md-5 mr-3 fa-2x"
            icon={['fab', 'react']}
          />
        </a>
        <a href="/" className="node-ic">
          <FontAwesomeIcon
            className="fa-lg white-text mr-md-5 mr-3 fa-2x"
            icon={['fab', 'node-js']}
          />
        </a>
      </div>
    </div>
  </div>
);

export default technology;
