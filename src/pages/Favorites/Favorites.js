import React from 'react';
import UserHeader from '../../components/UserHeader';
import UserList from '../../components/UserList';
import { favoritesSelector } from '../../selectors/userSelectors';

const title = 'Favorites';

const Favorites = ({ users }) => (
  <div className="favorites-root">
    <UserHeader title={title} />
    <UserList users={favoritesSelector(users)} />
  </div>
);

export default Favorites;
