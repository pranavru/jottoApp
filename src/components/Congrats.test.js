import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import Congrats from './Congrats';
import { findByTestAttr } from '../test/testUtils';

Enzyme.configure({ adapter: new Adapter() });

describe('Congrats Components', () => {

  const setup = (props = {}) => shallow(<Congrats {...props} />);

  test('should render without errors', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
  });
  test('should render no test when success prop is false', () => {

  });
  test('should render no empty congrats message when success prop is true', () => {

  });
})
