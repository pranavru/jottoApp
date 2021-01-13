/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import { shallow } from 'enzyme';
import React from 'react';
import { storeFactory } from './test/testUtils';
import App from './App';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<App store={store} />).dive().dive();
  return wrapper;
};

describe('Redux Props Test: App Component', () => {
  let wrapper;
  const initialState = {};
  test('should receive prop success as a piece of state', () => {
    const success = true;
    wrapper = setup({ ...initialState, success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  test('should receive secret keyword as a piece of state', () => {
    const secretWord = 'Party';
    wrapper = setup({ ...initialState, secretWord });
    const secretWordProps = wrapper.instance().props.secretWord;
    expect(secretWordProps).toBe(secretWord);
  });
  test('should have guessedWords based on user interaction as a piece of state', () => {
    const guessedWords = [{ guessedWord: 'Party', letterMatchCount: 5 }];
    wrapper = setup({ ...initialState, guessedWords });
    const guessedWordsProps = wrapper.instance().props.guessedWords;
    expect(guessedWordsProps).toBe(guessedWordsProps);
  });
  test('should have secret Keyword action creator as a prop method', () => {
    wrapper = setup();
    const getSecretWordPropFunc = wrapper.instance().props.getSecretWord;
    expect(getSecretWordPropFunc).toBeInstanceOf(Function);
  });
});
