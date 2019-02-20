import React from 'react';
import PropTypes from 'prop-types';
import UserHeader from '../../components/UserHeader';
import UserList from '../../components/UserList';
import { allUsersSelector } from '../../selectors/userSelectors';

const title = 'All Users';

const AllUsers = ({ users }) => (
  <div className="all-users-root">
    <UserHeader title={title} />
    <UserList users={allUsersSelector(users)} />
  </div>
);

AllUsers.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape())
};

export default AllUsers;
