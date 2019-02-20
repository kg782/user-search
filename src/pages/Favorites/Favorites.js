import React from 'react';
import UserHeader from '../../components/UserHeader';
import UserList from '../../components/UserList';

const title = 'Favorites';

export const filter = users =>
  users && users.filter(user => !user.archived && user.favorite);

const Favorites = ({ users }) => (
  <div className="favorites-root">
    <UserHeader title={title} />
    <UserList users={filter(users)} />
  </div>
);

export default Favorites;
