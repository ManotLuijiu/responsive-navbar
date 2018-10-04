import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation justify-content-between">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div>
        <a href="/">
          <img className="logo" src="./static/images/logo.png" alt="mb logo" />
        </a>
      </div>
      <div className="toolbar__logo">
        <a href="/">MeansBusiness</a>
      </div>
      <div className="spacer" />
      <form className="form-inline">
        <input
          type="search"
          className="form-control mr-sm-2"
          placeholder="Tax query"
          aria-label="Search"
        />
        <button type="submit" className="btn btn-outline-success my-2 my-sm-0">
          Search
        </button>
      </form>
      <div className="toolbar_navigation-items">
        <ul>
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
      </div>
    </nav>
  </header>
);

export default toolbar;
