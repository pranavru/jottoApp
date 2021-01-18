import React from 'react';
import { bool, func } from 'prop-types';
import NewWordButton from '../NewWordComponent/NewWord';

/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Renderend Component (or null if `success` prop is false)
 */

const Congrats = ({ success, getSecretWord }) => (success ? (
  <div data-test="component-congrats" className="container">
    <span data-test="congrats-message" className="alert alert-success">
      Congratulations! You guessed the word!
    </span>
    <div className="mt-3">
      <NewWordButton success reloadWebPage={getSecretWord} />
    </div>
  </div>
) : (<div data-test="component-congrats" />));
Congrats.propTypes = {
  success: bool,
  getSecretWord: func,
};
Congrats.defaultProps = {
  success: false,
  getSecretWord: () => { },
};
export default Congrats;
