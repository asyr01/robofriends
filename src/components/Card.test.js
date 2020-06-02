import { shallow, mount, render } from 'enzyme';
import Card from './Card';
import React from 'react';
import renderer from 'react-test-renderer';

it('expect to render Card Component', () => {
  const tree = renderer.create(<Card />).toJSON();
  expect(tree).toMatchSnapshot();
});
