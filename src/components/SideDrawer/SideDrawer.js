import React from 'react';
import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/">
            <img
              style={{
                width: '40px',
                paddingTop: '20px',
                float: 'left'
              }}
              src="./static/images/logo.png"
              alt="logo-nav"
            />
            <h4
              style={{
                fontSize: '1rem',
                fontWeight: '700',
                paddingTop: '30px',
                paddingRight: '40px'
              }}
            >
              MeansBusiness:
            </h4>
          </a>
        </li>
        <li>
          <a href="/">Services</a>
        </li>
        <li>
          <a href="/">Blog &amp; Docs</a>
        </li>
        <li>
          <a href="/">About Us</a>
        </li>
        <li>
          <a href="/">Users</a>
        </li>
        <li>
          <a href="/">API</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
