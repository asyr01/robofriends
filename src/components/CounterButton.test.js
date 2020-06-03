import { shallow, mount, render } from 'enzyme';
import CounterButton from './CounterButton';
import React from 'react';
import renderer from 'react-test-renderer';

it('expect to render CounterButton Component', () => {
  const mockColor = 'red';
  const tree = renderer.create(<CounterButton color={mockColor} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('correctly increments the counter', () => {
  const mockColor = 'red';
  const wrapper = shallow(<CounterButton color={mockColor} />);

  wrapper.find('[id="counter"]').simulate('click');
  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state()).toEqual({ count: 3 });
  wrapper.find('[id="counter"]').simulate('keypress');
  expect(wrapper.state()).toEqual({ count: 3 });
  expect(wrapper.props().color).toEqual('red');

  const tree = renderer.create(<CounterButton color={mockColor} />).toJSON();
  expect(tree).toMatchSnapshot();
});
