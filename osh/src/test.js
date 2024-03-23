import React, { useState } from 'react';

function das(){
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { text: 'Option 1', href: '#' },
    { text: 'Option 2', href: '#' },
    { text: 'Option 3', href: '#' },
  ];

  return (
    <div>
        <nav class="navbar">
    <a href="#" class="logo">Your Logo</a>
    <ul class="nav-links">
      <li><a href="#">Option 1</a></li>
      <li><a href="#">Option 2</a></li>
      <li><a href="#">Option 3</a></li>
    </ul>
    <div class="login-register">
      <a href="#">Login</a>
      <a href="#">Register</a>
    </div>
    <div class="burger-menu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
    </div>
  );
};
}

export default das;

