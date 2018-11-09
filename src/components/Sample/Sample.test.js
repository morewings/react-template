import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Sample from 'components/Sample/Sample';

const sample = jest.fn();
const defaultProps = {
  increment: 0,
  sample,
};

describe('src > components > Sample.js', () => {
  beforeEach(() => {
    sample.mockClear();
  });
  it('renders without crashing', () => {
    const wrapper = shallow(<Sample {...defaultProps} />);
    expect(3).toBe(2);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
