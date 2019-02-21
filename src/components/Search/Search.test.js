import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Search from './Search';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Search onChange={jest.fn()} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should call change handler', () => {
  const handler = jest.fn();
  const wrapper = shallow(<Search onChange={handler} />);
  const event = {
    target: {
      value: 'query'
    }
  };
  wrapper.find('.input').simulate('change', event);
  expect(handler.mock.calls[0][0]).toBe(event.target.value);
});
