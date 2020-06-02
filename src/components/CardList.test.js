import { shallow, mount, render } from 'enzyme';
import CardList from './CardList';
import React from 'react';
import renderer from 'react-test-renderer';

it('expect to render Card Component', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'John Snow',
      username: 'johnjohn',
      email: 'john@gmail.com',
    },
  ];
  const tree = renderer.create(<CardList robots={mockRobots} />).toJSON();
  expect(tree).toMatchSnapshot();
});
