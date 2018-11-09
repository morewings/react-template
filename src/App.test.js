import React from 'react';
import {shallow} from 'enzyme'; // TODO: use mount and store
import toJson from 'enzyme-to-json';
import App from 'App';

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
