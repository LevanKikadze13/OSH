import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './HomePage.css';
import NavbarComponent from './NavbarComponent';
import ResponsiveSwiper from './Slider';
import AppNavbar from './NavbarComponent';

export function HomePage() {
  const [displayBurgerMenu, setDisplayBurgerMenu] = useState(true)

  const handleBurgerMenuClick = () => {
    setDisplayBurgerMenu(!displayBurgerMenu);
  }

  return (
    <div id="home-page">
      <AppNavbar></AppNavbar>
      <ResponsiveSwiper></ResponsiveSwiper>

    </div>
  );
}

export default HomePage;
