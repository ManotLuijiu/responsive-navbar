import React from 'react';
import './Card.css';

class Card extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="card mb-4">
              <img
                src="./static/image/pict.png"
                alt="Company Reg."
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">COMPANY REGISTRATION</h5>
                <p className="card-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
                  saepe nisi corrupti sint doloribus architecto a? Ut
                  repudiandae aspernatur enim amet porro temporibus assumenda
                  voluptas?
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">BOOKKEEPING &amp; TAXATION</h5>
                <p className="card-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
                  saepe nisi corrupti sint doloribus architecto a? Ut
                  repudiandae aspernatur enim amet porro temporibus assumenda
                  voluptas?
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">IT INFRASTRUCTURE</h5>
                <p className="card-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
                  saepe nisi corrupti sint doloribus architecto a? Ut
                  repudiandae aspernatur enim amet porro temporibus assumenda
                  voluptas?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
