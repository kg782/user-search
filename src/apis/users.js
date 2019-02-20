import axios from 'axios';

export const getUsers = () =>
  axios.get('/users.json').then(response => response.data);
