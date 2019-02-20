import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';
import AccountCircleIcon from '../icons/AccountCircleIcon';
import StarIcon from '../icons/StarIcon';
import VerifiedUserIcon from '../icons/VerifiedUserIcon';
import PeopleIcon from '../icons/PeopleIcon';
import InboxIcon from '../icons/InboxIcon';

const routes = [
  { to: '/', icon: AccountCircleIcon, copy: 'All Users' },
  { to: '/favorites', icon: StarIcon, copy: 'Favorites' },
  { to: '/administrators', icon: VerifiedUserIcon, copy: 'Administrators' },
  { to: '/non-admins', icon: PeopleIcon, copy: 'Non-Admins' },
  { to: '/archived', icon: InboxIcon, copy: 'Archived' }
];

const Nav = () => {
  return (
    <div className="nav-root">
      <div className="header">User</div>
      <div className="navigation">
        {routes.map(item => (
          <NavLink
            key={item.to}
            className="link"
            activeClassName="selected-link"
            to={item.to}
          >
            <div className="icon">
              <item.icon />
            </div>
            <div className="copy">{item.copy}</div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Nav;
