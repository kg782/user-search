import { createSelector } from 'reselect';

const usersSelector = users => users;

export const allUsersSelector = createSelector(
  usersSelector,
  users => users && users.filter(user => !user.archived)
);

export const administratorSelector = createSelector(
  usersSelector,
  users => users && users.filter(user => !user.archived && user.administrator)
);

export const archivedSelector = createSelector(
  usersSelector,
  users => users && users.filter(user => user.archived)
);

export const favoritesSelector = createSelector(
  usersSelector,
  users => users && users.filter(user => !user.archived && user.favorite)
);

export const nonAdminSelector = createSelector(
  usersSelector,
  users => users && users.filter(user => !user.archived && !user.administrator)
);
