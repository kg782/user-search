import React from 'react';
import PropTypes from 'prop-types';
import './UserList.scss';
import MoreVertIcon from '../icons/MoreVertIcon';
import PersonIcon from '../icons/PersonIcon';

const UserList = ({ users }) => (
  <div className="user-list-root">
    {users.map(item => (
      <div key={item.id} className="list">
        <div className="avatar">
          <PersonIcon />
        </div>
        <div className="person-info">
          <div className="name-and-email">
            <div className="full-name">{item.fullName}</div>
            <small>{item.email}</small>
            <small className="mobile-only">last login: {item.lastLogin}</small>
          </div>
          <small className="date">{item.date}</small>
          <small className="last-login">{item.lastLogin}</small>
          <div className="icon">
            <MoreVertIcon />
          </div>
        </div>
      </div>
    ))}
  </div>
);

UserList.defaultProps = {
  users: []
};

UserList.propTypes = {
  users: PropTypes.array.isRequired
};

export default UserList;
