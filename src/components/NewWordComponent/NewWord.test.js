/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import { checkPropAttr, findByTestAttr } from '../../test/testUtils';
import NewWordButton from './NewWord';

/**
 * Initial function to render the component using Enzyme
 * @function setup
 * @param  {Object} initialState={} - Inital State of the store
 * @returns {ShallowWrapper}
 */
const setup = (initialProps = { success: false }, otherProps) => shallow(
  <NewWordButton {...initialProps} {...otherProps} />,
);

describe('New Word Button Component', () => {
  describe('Initial Render', () => {
    let wrapper;

    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });
    test('should render without errors', () => {
      const component = findByTestAttr(wrapper, 'component-new-word');
      expect(component.length).toBe(1);
    });
    test('should render new word button ', () => {
      const component = findByTestAttr(wrapper, 'button-new-word');
      expect(component.length).toBe(1);
    });
  });
  describe('redux props', () => {
    test('should check for correct props', () => {
      const checkProps = { success: true, reloadWebPage: () => { } };
      checkPropAttr(NewWordButton, checkProps);
    });
  });
  describe('Button click functionality', () => {
    test('should reset on button click', () => {
      const reloadWebPageMock = jest.fn();
      // Initial State is {success: false}, change it to true
      const wrapper = setup({ success: true }, { reloadWebPage: reloadWebPageMock });
      const buttonClicked = findByTestAttr(wrapper, 'button-new-word');
      buttonClicked.simulate('click');

      expect(reloadWebPageMock.mock.calls.length).toBe(1);
    });
  });
  describe('Conditional based rendering', () => {
    let wrapper;

    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });

    test('should not render new word button when success is false', () => {
      const component = findByTestAttr(wrapper, 'button-new-word');
      expect(component.text()).toBe('');
    });
  });
});
