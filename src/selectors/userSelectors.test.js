import {
  allUsersSelector,
  administratorSelector,
  archivedSelector,
  favoritesSelector,
  nonAdminSelector
} from './userSelectors';

const users = [
  {
    id: 0,
    fullName: 'Suzy Cuningham',
    email: 'suzy.cuningham@gmail.com',
    date: 'Oct 1, 2015',
    lastLogin: '1 year ago',
    administrator: true,
    favorite: true,
    archived: false
  },
  {
    id: 1,
    fullName: 'Bobby Daniels',
    email: 'bobbyD@outlook.com',
    date: 'Oct 1, 2015',
    lastLogin: '1 year ago',
    administrator: true,
    favorite: false,
    archived: false
  },
  {
    id: 2,
    fullName: 'John Walker',
    email: 'johnnyWalker@blue.com',
    date: 'Oct 1, 2015',
    lastLogin: '1 year ago',
    administrator: true,
    favorite: false,
    archived: false
  },
  {
    id: 3,
    fullName: 'Eddy Stevens',
    email: 'eStevens@yahoo.com',
    date: 'Oct 1, 2015',
    lastLogin: '1 year ago',
    administrator: false,
    favorite: true,
    archived: false
  },
  {
    id: 4,
    fullName: 'Jan Williams',
    email: 'jDubz@msn.com',
    date: 'Oct 1, 2015',
    lastLogin: '1 year ago',
    administrator: false,
    favorite: false,
    archived: false
  },
  {
    id: 5,
    fullName: 'John Doe',
    email: 'john@msn.com',
    date: 'Oct 1, 2015',
    lastLogin: '1 year ago',
    administrator: true,
    favorite: true,
    archived: true
  }
];

test('usersSelector filters all user except archived', () => {
  expect(allUsersSelector(users)).toMatchSnapshot();
});

test('administratorSelector filters', () => {
  expect(administratorSelector(users)).toMatchSnapshot();
});

test('archivedSelector filters', () => {
  expect(archivedSelector(users)).toMatchSnapshot();
});

test('favoritesSelectorfilters ', () => {
  expect(favoritesSelector(users)).toMatchSnapshot();
});

test('nonAdminSelector filters', () => {
  expect(nonAdminSelector(users)).toMatchSnapshot();
});
