/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../test/testUtils';

import ErrorComponent from './Error';

const defaultProps = {};
const setup = (props = {}) => {
  const initalProps = { ...defaultProps, ...props };
  // eslint-disable-next-line react/jsx-filename-extension
  const wrapper = shallow(<ErrorComponent
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...initalProps}
  />);
  return wrapper;
};

describe('Error Component: ', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({});
  });
  test('should render without errors', () => {
    const component = findByTestAttr(wrapper, 'component-error-message-div');
    expect(component.length).toBe(1);
  });
  test('should render error message without errors', () => {
    const component = findByTestAttr(wrapper, 'error-message');
    expect(component.length).toBe(1);
  });
  test('should render error message div message', () => {
    const component = findByTestAttr(wrapper, 'error-message');
    expect(component.text()).toBe(
      'There was an error retrieving the secret word. Please try again later.',
    );
  });
});
