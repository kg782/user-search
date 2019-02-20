import React from 'react';
import MenuIcon from '../icons/MenuIcon';
import ChromeReaderModeIcon from '../icons/ChromeReaderMode';
import './Header.scss';

const Header = () => (
  <header className="header-root">
    <div className="menu">
      <MenuIcon />
    </div>
    <div className="title">Product Name</div>
    <div className="mode">
      <ChromeReaderModeIcon />
    </div>
  </header>
);

export default Header;
