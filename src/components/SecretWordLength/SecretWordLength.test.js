/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import SecretWordLength from './SecretWordLength';
import { findByTestAttr } from '../../test/testUtils';

// eslint-disable-next-line react/jsx-filename-extension
const setup = (initialProps) => shallow(<SecretWordLength
  // eslint-disable-next-line react/jsx-props-no-spreading
  {...initialProps}
/>);

describe('Secret Word Length Div:', () => {
  const initialProps = { secretWord: 'Party', success: false, giveUpGuess: false };
  let wrapper;
  let component;
  beforeEach(() => {
    wrapper = setup(initialProps);
    component = findByTestAttr(wrapper, 'component-secret-word-length');
  });
  test('should render without errors', () => expect(component.length).toBe(1));
  test('should display message when above props passed', () => expect(component.text()).toBe(`The secret word has length of ${initialProps.secretWord.length}`));
});
describe('Secret word Length message Div', () => {
  let wrapper;
  let component;
  const initialProps = { secretWord: '', success: true, giveUpGuess: true };
  beforeEach(() => {
    wrapper = setup(initialProps);
    component = findByTestAttr(wrapper, 'message-secret-word-length');
  });
  test('secretWord is ""', () => expect(component.length).toBe(0));
  test('success is true', () => expect(component.length).toBe(0));
  test('giveUpGuess is true', () => expect(component.length).toBe(0));
});
