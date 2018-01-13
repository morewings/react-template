import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Sample from 'components/Sample/Sample';

describe('src > components > Sample.js', () => {
  const wrapper = shallow(<Sample />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
