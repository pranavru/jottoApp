/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import GiveUp from './GiveUp';
import { findByTestAttr } from '../../test/testUtils';

describe('Giveup component:', () => {
  const setup = (initalState = {}) => shallow(<GiveUp {...initalState} />);
  describe('render component', () => {
    let wrapper;
    const initialState = { giveUpGuess: true, secretWord: 'Party' };
    beforeEach(() => {
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
      expect(component.text()).toBe(`The secret word was ${initialState.secretWord}. Better luck next time!`);
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
