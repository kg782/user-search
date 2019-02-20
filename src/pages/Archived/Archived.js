import React from 'react';
import UserHeader from '../../components/UserHeader';
import UserList from '../../components/UserList';
import { archivedSelector } from '../../selectors/userSelectors';

const title = 'Archived';

const Archived = ({ users }) => (
  <div className="archived-root">
    <UserHeader title={title} />
    <UserList users={archivedSelector(users)} />
  </div>
);

export default Archived;
