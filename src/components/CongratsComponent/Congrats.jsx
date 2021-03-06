import React from 'react';
import { bool } from 'prop-types';

/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Renderend Component (or null if `success` prop is false)
 */

const Congrats = ({ success }) => (success ? (
  <div data-test="component-congrats" className="container">
    <span data-test="congrats-message" className="alert alert-success">
      Congratulations! You guessed the word!
    </span>
  </div>
) : (<div data-test="component-congrats" />));
Congrats.propTypes = {
  success: bool,
};
Congrats.defaultProps = {
  success: false,
};
export default Congrats;
