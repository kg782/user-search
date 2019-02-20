import React from 'react';
import PropTypes from 'prop-types';
import MenuIcon from '@material-ui/icons/Menu';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import './Header.scss';

const Header = ({ title }) => (
  <header className="header-root">
    <div className="menu">
      <MenuIcon />
    </div>
    <div className="title">{title}</div>
    <div className="mode">
      <ChromeReaderModeIcon />
    </div>
  </header>
);

Header.defaultProps = {
  title: 'Product Name'
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
