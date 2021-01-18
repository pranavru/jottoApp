/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import GiveUp from './GiveUp';
import { findByTestAttr, storeFactory } from '../../test/testUtils';

describe('Giveup component:', () => {
  // eslint-disable-next-line react/jsx-filename-extension
  const setup = (initalState = {}) => {
    const store = storeFactory(initalState);
    // eslint-disable-next-line react/jsx-filename-extension
    return shallow(<GiveUp store={store} />).dive().dive();
  };
  describe('render component', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { giveUpGuess: true, secretWord: 'Party' };
      wrapper = setup(initialState);
    });
    test('should render component without errors', () => {
      const component = findByTestAttr(wrapper, 'component-give-up-button');
      expect(component.length).toBe(1);
    });
    test('should render button when giveUpGuess is true', () => {
      const component = findByTestAttr(wrapper, 'button-give-up-button');
      expect(component.length).toBe(1);
    });
    test('should not render button if giveUpGuess piece of state is true', () => {
      const component = findByTestAttr(wrapper, 'message-give-up-button');
      expect(component.text()).toBe('The secret word was Party\nBetter luck next time!');
    });
    test('should not render button if giveUpGuess piece of state is false', () => {
      wrapper = setup({ giveUpGuess: false, secretWord: '' });
      const component = findByTestAttr(wrapper, 'message-give-up-button');
      expect(component.length).toBe(0);
    });
  });
  describe('clickable actions', () => {
    test('should mock giveUpGame action', () => {

    });
  });
});
