import React from 'react';

const message = 'There was an error retrieving the secret word. Please try again later.';
const ErrorComponent = () => {
  const contents = (
    <div data-test="component-error-message-div">
      <span className="alert alert-danger" data-test="error-message">
        {message}
      </span>
    </div>
  );
  return (<div className="container">{contents}</div>);
};
export default ErrorComponent;
