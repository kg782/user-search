import React from 'react';
import ReactDOM from 'react-dom';
import Administrators from './Administrators';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Administrators />, div);
  ReactDOM.unmountComponentAtNode(div);
});
