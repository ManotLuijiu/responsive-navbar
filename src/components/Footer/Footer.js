import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const footer = () => (
  <footer className="page-footer font-small pt-4 border-top">
    <div className="row text-center">
      <div className="col-xs-6 col-md-6 col-lg-3 py-5 px-5" id="company-info">
        <h5 className="text-uppercase">Means Business Ltd.</h5>
        <p>Welcome to digital world!</p>
      </div>
      <div className="col-xs-6 col-md-6 col-lg-3 ml-auto py-5" id="social-ic">
        <div className="mb-5">
          <a href="/" className="fb-ic">
            <FontAwesomeIcon
              className="fa-lg white-text mr-md-5 mr-3 fa-2x"
              icon={['fab', 'facebook']}
            />
          </a>
          <a href="/" className="tw-ic">
            <FontAwesomeIcon
              className="fa-lg white-text mr-md-5 mr-3 fa-2x"
              icon={['fab', 'twitter']}
            />
          </a>
          <a href="/" className="sl-ic">
            <FontAwesomeIcon
              className="fa-lg white-text mr-md-5 mr-3 fa-2x"
              icon={['fab', 'slack']}
            />
          </a>
          <a href="/" className="li-ic">
            <FontAwesomeIcon
              className="fa-lg white-text mr-md-5 mr-3 fa-2x"
              icon={['fab', 'linkedin']}
            />
          </a>
          <a href="/" className="gh-ic">
            <FontAwesomeIcon
              className="fa-lg white-text mr-md-5 mr-3 fa-2x"
              icon={['fab', 'github']}
            />
          </a>
        </div>
      </div>
    </div>
    <div className="footer-copyright text-center py-3 border-top border-dark">
      © 2018 Copyright:
      <a href="https://means-business.com"> MeansBusiness.com</a>
    </div>
  </footer>
);

export default footer;
