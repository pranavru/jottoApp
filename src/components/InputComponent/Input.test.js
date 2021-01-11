/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../test/testUtils';
import InputComp from './Input';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<InputComp store={store} />).dive().dive();
  return wrapper;
};

describe('Input Component: ', () => {
  describe('When word has not been guessed:', () => {
    let wrapper;

    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });

    test('should render component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });
    test('should render input box', () => {
      const component = findByTestAttr(wrapper, 'component-input-box');
      expect(component.length).toBe(1);
    });
    test('should render submit button', () => {
      const component = findByTestAttr(wrapper, 'component-submit-button');
      expect(component.length).toBe(1);
    });
  });
  describe('word has been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });
    test('should render component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });
    test('should not render input box', () => {
      const component = findByTestAttr(wrapper, 'component-input-box');
      expect(component.length).toBe(0);
    });
    test('should not render submit button', () => {
      const component = findByTestAttr(wrapper, 'component-submit-button');
      expect(component.length).toBe(0);
    });
  });
});

describe('update State', () => {
  test('should ', () => {

  });
});
