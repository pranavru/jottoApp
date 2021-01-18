/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../test/testUtils';
import InputComp, { UnconnectedInputComp } from './Input';

/**
 * Initial function to render the component using Enzyme
 * @function setup
 * @param  {Object} initialState={} - Inital State of the store
 * @returns {ShallowWrapper} wrapper
 */
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

  describe('redux props', () => {
    test('should have success piece of state as props', () => {
      const success = true;
      const wrapper = setup({ success }); // initialState = {success: true}
      const successProp = wrapper.instance().props.success;
      expect(successProp).toBe(success);
    });
    test('should have guessWord action creator as a functional prop', () => {
      const wrapper = setup();
      const props = wrapper.instance().props.guessWord;
      expect(props).toBeInstanceOf(Function);
    });
  });

  describe('guessWord action creator calls', () => {
    let guessWordMock;
    let wrapper;
    let props = {
      success: false,
      guessedWords: [],
      guessWord: () => { },
    };
    const guessedWord = 'train';

    beforeEach(() => {
      guessWordMock = jest.fn();
      props = { ...props, guessWord: guessWordMock(guessedWord) };
      // eslint-disable-next-line react/jsx-props-no-spreading
      wrapper = shallow(<UnconnectedInputComp {...props} />);

      // Added user input to the input field
      wrapper.setState({ currentGuess: guessedWord });

      // Find the submit button from the DOM and perform click functionality
      findByTestAttr(wrapper, 'component-submit-button').simulate('click', { preventDefault() { } });
    });

    test('should invoke action props (guessWord) when the Submit Button is clicked', () => {
      // Look for the mock Function call count
      const guessWordMockCallCount = guessWordMock.mock.calls.length;
      expect(guessWordMockCallCount).toBe(1);
    });
    test('should call guessWord action with an input value', () => {
      const guessWordArgAsInputValue = guessWordMock.mock.calls[0][0];
      expect(guessWordArgAsInputValue).toBe(guessedWord);
    });
    test('should empty the currentGuess input when the submit is pressed', () => expect(wrapper.state('currentGuess')).toBe(''));
  });
});
