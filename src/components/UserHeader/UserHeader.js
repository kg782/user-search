import React from 'react';
import PropTypes from 'prop-types';
import './UserHeader.scss';
import ViewModuleIcon from '../icons/ViewModuleIcon';
import SortIcon from '../icons/SortIcon';
import SettingsIcon from '../icons/SettingsIcon';
import MenuIcon from '../icons/MenuIcon';

const UserHeader = ({ title }) => (
  <div className="user-header-root">
    <div className="title">{title}</div>
    <ViewModuleIcon />
    <SortIcon />
    <SettingsIcon />
    <MenuIcon />
  </div>
);

UserHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default UserHeader;
