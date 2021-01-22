/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';

import UserEntryButton from './UserEntryButton';
import { findByTestAttr } from '../../../test/testUtils';

const defaultProps = { userEntryBtnAction: () => { } };
const setup = (props = {}) => {
  const initialProps = { ...defaultProps, ...props };
  /* eslint-disable-next-line react/jsx-props-no-spreading */
  const wrapper = shallow(<UserEntryButton {...initialProps} />);
  return wrapper;
};

describe('User Entry Button:', () => {
  let wrapper;
  beforeEach(() => {
    const initialProps = { display: true };
    wrapper = setup(initialProps);
  });
  test('should render user entry button component', () => {
    const component = findByTestAttr(wrapper, 'component-user-entry-button');
    expect(component.length).toBe(1);
  });
  test('should render user entry button component', () => {
    const component = findByTestAttr(wrapper, 'user-entry-button');
    expect(component.length).toBe(1);
  });
  test('should render button when display value is true', () => {
    const component = findByTestAttr(wrapper, 'user-entry-button');
    expect(component.text().length).toBeGreaterThanOrEqual(1);
  });
  test('should not display button when guessedwords are zero (0)', () => {
    const initialProps = { display: false };
    wrapper = setup(initialProps);
    const component = findByTestAttr(wrapper, 'user-entry-button');
    expect(component.text().length).toBe(0);
  });
});
describe('User Entry Button Click: ', () => {
  let wrapper;
  const userEntryBtnActionMock = jest.fn();
  beforeEach(() => {
    const initialProps = { display: true, userEntryBtnAction: userEntryBtnActionMock };

    wrapper = setup(initialProps);

    findByTestAttr(wrapper, 'user-entry-button').simulate('click');
  });
  test('should perform button click', () => {
    expect(userEntryBtnActionMock.mock.calls.length).toBe(1);
  });
});
