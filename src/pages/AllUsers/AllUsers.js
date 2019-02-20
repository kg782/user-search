import React from 'react';
import './AllUsers.scss';
import UserHeader from '../../components/UserHeader';

const title = 'All Users';

const AllUsers = () => (
  <div className="all-users-root">
    <UserHeader title={title} />
  </div>
);

export default AllUsers;
