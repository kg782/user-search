import React from 'react';
import UserHeader from '../../components/UserHeader';
import UserList from '../../components/UserList';
import { nonAdminSelector } from '../../selectors/userSelectors';

const title = 'Non Admins';

const NonAdmins = ({ users }) => (
  <div className="non-admins-root">
    <UserHeader title={title} />
    <UserList users={nonAdminSelector(users)} />
  </div>
);

export default NonAdmins;
