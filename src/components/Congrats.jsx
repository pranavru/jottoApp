import React from 'react'

/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Renderend Component (or null if `success` prop is false)
 */
const Congrats = (props) => props.success ? (
  <div data-test="component-congrats">
    <span data-test="congrats-message">
      Congratulations! You guessed the word!
      </span>
  </div>
) : (<div data-test="component-congrats" />);

export default Congrats;
