/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Congrats from './Congrats';
import { checkPropAttr, findByTestAttr } from '../test/testUtils';

describe('Congrats Components', () => {
  const defaultProps = { success: false };
  const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Congrats {...setupProps} />);
  };

  test('should render without errors', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
  });
  test('should render no text when success prop is false', () => {
    const wrapper = setup({ success: false });
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe('');
  });
  test('should render non-empty congrats message when success prop is true', () => {
    const wrapper = setup({ success: true });
    const message = findByTestAttr(wrapper, 'congrats-message');
    expect(message.text().length).not.toBe(0);
  });
  test('should not throw warning with expected props', () => {
    const expectedProps = { success: false };
    checkPropAttr(Congrats, expectedProps);
  });
});
