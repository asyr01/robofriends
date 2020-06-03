import { shallow, mount, render } from 'enzyme';
import App from './App';
import React from 'react';
import renderer from 'react-test-renderer';

it('expect to render App Component', () => {
  const mockStore = {
    robots: [],
    searchField: '',
  };
  const tree = renderer.create(<App store={mockStore} />).toJSON();
  expect(tree).toMatchSnapshot();
});
