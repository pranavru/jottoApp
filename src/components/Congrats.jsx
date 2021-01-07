import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Renderend Component (or null if `success` prop is false)
 */
const Congrats = ({ success }) => (success ? (
  <div data-test="component-congrats">
    <span data-test="congrats-message">
      Congratulations! You guessed the word!
    </span>
  </div>
) : (<div data-test="component-congrats" />));
Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};
export default Congrats;
