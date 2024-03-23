import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './HomePage.css';
import NavbarComponent from './NavbarComponent';


export function HomePage() {
  const [displayBurgerMenu, setDisplayBurgerMenu] = useState(true)

  const handleBurgerMenuClick = () => {
    setDisplayBurgerMenu(!displayBurgerMenu);
  }

  return (
    <div id="home-page">
      <NavbarComponent/>

    </div>
  );
}

export default HomePage;
