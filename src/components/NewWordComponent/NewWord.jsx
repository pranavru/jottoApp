import React from 'react';
import { bool, func } from 'prop-types';

// eslint-disable-next-line no-shadow
const NewWordButton = ({ display, reloadWebPage }) => (
  <div data-test="component-new-word">
    {display
      ? (
        <button
          type="button"
          className="btn-primary"
          data-test="button-new-word"
          // eslint-disable-next-line no-return-await
          onClick={reloadWebPage}
        >
          New Word
        </button>
      )
      : <div data-test="button-new-word" />}
  </div>
);
NewWordButton.propTypes = {
  display: bool,
  reloadWebPage: func,
};
NewWordButton.defaultProps = {
  display: false,
  reloadWebPage: () => { },
};

export default NewWordButton;
