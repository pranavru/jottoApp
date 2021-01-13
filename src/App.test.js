/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import { shallow } from 'enzyme';
import React from 'react';
import { storeFactory } from './test/testUtils';
import App, { UnconnectedApp } from './App';

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

describe('Unconnected Component', () => {
  test('should run getSecretWord on App mount', () => {
    const getSecretWordMock = jest.fn();
    const props = {
      success: false,
      secretWord: 'Party',
      guessedWords: [{ guessedWord: 'Party', letterMatchCount: 5 }],
      getSecretWord: getSecretWordMock,
    };

    // Setup App Component with getSecretWordMock() as a prop getSecretWord
    // eslint-disable-next-line react/jsx-props-no-spreading
    const wrapper = shallow(<UnconnectedApp {...props} />);

    // Call the componentDidMount()
    wrapper.instance().componentDidMount();
    const propsCalledCount = getSecretWordMock.mock.calls.length;
    expect(propsCalledCount).toBeGreaterThanOrEqual(1);
  });
});
