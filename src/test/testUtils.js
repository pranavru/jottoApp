/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
/* eslint-disable react/forbid-foreign-prop-types */
import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';

import rootReducer from '../reducers';

/**
 * Creating a testing store with imported reducers, middleware, and initialState.
 * globals: rootReducer
 * @function storeFactory
 * @param  {object} initialState - Initial State for the store.
 * @returns {Store} - Redux store
 */
export const storeFactory = (initialState) => createStore(rootReducer, initialState);

/**
 * Return node(s) with the given data-test attribute.
 * @param  {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param  {string} val - Value of the data-test attribute for searching the node.
 * @returns  {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

export const checkPropAttr = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name,
  );
  return expect(propError).toBeUndefined();
};
