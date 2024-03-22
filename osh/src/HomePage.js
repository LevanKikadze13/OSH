import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NewsSlider from './NewsSlider';
import './HomePage.css';

function HomePage() {
  return (
    <div id="home-page">
      <div id="header">
        <div className="header-content" id="header-content-left">
          <h1 className="logo-container">
            <img className="logo" src="https://oshe.ge/images/custom/logo-light.png" alt="Logo" />
          </h1>
        </div>
        <div className="header-content" id="header-content-middle">
          <div id="list-container">
            <ul className="navbar-nav" id="list">
              <li className="nav-item">
                <a className="nav-link" href="#">Option 1</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Option 2</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Option 3</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="header-content header-content-right" id="header-content-right"> 
          <a href="#" className="btn btn-primary me-2">Login</a> 
          <a href="#" className="btn ">Register</a> 
        </div>
      </div>
      <NewsSlider/>
    </div>
  );
}

export default HomePage;
