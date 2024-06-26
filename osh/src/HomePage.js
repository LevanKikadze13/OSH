import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './HomePage.css';
import NavbarComponent from './NavbarComponent';
import ResponsiveSwiper from './NewsSwiper';


export function HomePage() {
  return (
    <div id="home-page">
      <NavbarComponent/>
      <ResponsiveSwiper/>
    </div>
  );
}

export default HomePage;
