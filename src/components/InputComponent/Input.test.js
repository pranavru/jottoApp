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
    test('should render component without error', () => {

    });
    test('should render input box', () => {

    });
    test('should render submit button', () => {

    });
  });
  describe('word has been guessed', () => {
    test('should render component without error', () => {

    });
    test('should not render input box', () => {

    });
    test('should not render submit button', () => {

    });
  });
});

describe('update State', () => {
  test('should ', () => {

  });
});
