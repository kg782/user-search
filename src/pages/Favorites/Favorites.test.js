import React from 'react';
import ReactDOM from 'react-dom';
import NonAdmins from './NonAdmins';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NonAdmins />, div);
  ReactDOM.unmountComponentAtNode(div);
});
