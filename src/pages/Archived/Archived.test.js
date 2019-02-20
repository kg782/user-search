import React from 'react';
import ReactDOM from 'react-dom';
import Archived from './Archived';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Archived />, div);
  ReactDOM.unmountComponentAtNode(div);
});
