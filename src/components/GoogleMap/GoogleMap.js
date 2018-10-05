import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';
import './GoogleMap.css';

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=GoogleMap_API_KEY&callback=initMap',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={18} defaultCenter={{ lat: 7.901841, lng: 98.332864 }}>
    {props.isMarkerShown && (
      <Marker
        position={{ lat: 7.901841, lng: 98.332864 }}
        onClick={props.onMarkerClick}
      />
    )}
  </GoogleMap>
));

class MyGoogleMap extends React.PureComponent {
  state = {
    isMarkerShown: false
  };

  componentDidMount() {
    this.delayedShowMarker();
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  };

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-around">
          <div className="col-12 col-md-6 mb-5" id="my-map">
            <MyMapComponent
              isMarkerShown={this.state.isMarkerShown}
              onMarkerClick={this.handleMarkerClick}
            />
          </div>
          <div className="col-12 col-md-6" id="my-contact">
            <div className="row">
              <div className="col-md-12 col-lg-6 offset-lg-2" id="address-list">
                <h4>Contact Us</h4>
                <ul className="list-group">
                  <li className="list-group-item">
                    <span>Address: </span>
                    142/191 Moo7 Kathu, Kathu, Phuket 83120 <br />{' '}
                    <span>Telephone: </span>
                    +66980122184 <br />
                    <span>Fax: </span>
                    +6676609214
                  </li>
                  <li className="list-group-item" id="line-group">
                    <a href="https://line.me/R/ti/p/%40xxw5770i">
                      <img
                        id="line-id"
                        alt="Add Friend"
                        src="https://scdn.line-apps.com/n/line_add_friends/btn/en.png"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-12 col-lg-4">
                <h1>TEST</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyGoogleMap;
