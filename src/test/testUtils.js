/* eslint-disable react/forbid-foreign-prop-types */
import checkPropTypes from 'check-prop-types';

export const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);
export const checkPropAttr = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes, 
    conformingProps,
    'prop', 
    component.name
  );
  return expect(propError).toBeUndefined();
}