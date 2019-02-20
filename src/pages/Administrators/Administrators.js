import React from 'react';
import UserHeader from '../../components/UserHeader';
import UserList from '../../components/UserList';
import { administratorSelector } from '../../selectors/userSelectors';

const title = 'Administrators';

export const filter = users =>
  users && users.filter(user => !user.archived && user.administrator);

const Administrators = ({ users }) => (
  <div className="administrators-root">
    <UserHeader title={title} />
    <UserList users={administratorSelector(users)} />
  </div>
);

export default Administrators;
