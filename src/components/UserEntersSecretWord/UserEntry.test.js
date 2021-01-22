/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import React from 'react';
import UserEntry from './UserEntry';
import { findByTestAttr } from '../../test/testUtils';

const defaultProps = { formAction: () => { } };
const setup = (props) => {
  const initialState = { ...defaultProps, ...props };
  // eslint-disable-next-line react/jsx-props-no-spreading
  return shallow(<UserEntry {...initialState} />);
};
describe('User Entry:', () => {
  describe('Renders without error', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { formAction: () => { } };
      wrapper = setup(initialState);
    });
    test('should render component', () => {
      const component = findByTestAttr(wrapper, 'component-User-Input-SSW');
      expect(component.length).toBe(1);
    });
    test('should render input field', () => {
      const component = findByTestAttr(wrapper, 'Input-Text-User-Input-SSW');
      expect(component.length).toBe(1);
    });
    test('should render button field', () => {
      const component = findByTestAttr(wrapper, 'Submit-Btn-User-Input-SSW');
      expect(component.length).toBe(1);
    });
    test('should render instructions', () => {
      const component = findByTestAttr(wrapper, 'instruction-User-Input-SSW');
      expect(component.text()).toBe('Enter Secret word for User to guess');
    });
  });
  describe('Submit User Input value', () => {
    let wrapper;
    const userInput = 'Party';
    let submitButtonMock;
    beforeEach(() => {
      // Setup button
      submitButtonMock = jest.fn();
      // Setup State
      const initalState = { formAction: submitButtonMock };
      // Load the mock component
      wrapper = setup(initalState);

      // Set the input value
      const component = wrapper.instance();
      component.inputRef = { current: { value: userInput } };

      // Find the submit button and simulate click.
      const submitBtn = findByTestAttr(wrapper, 'Submit-Btn-User-Input-SSW');
      submitBtn.simulate('click', { preventDefault() { } });
    });
    test('Submit button is clickable', () => {
      expect(submitButtonMock.mock.calls.length).toBe(1);
    });
    test(`Submit button has passed a parameter with value ${userInput}`, () => {
      expect(submitButtonMock.mock.calls[0][0]).toEqual(userInput);
    });
  });
});
