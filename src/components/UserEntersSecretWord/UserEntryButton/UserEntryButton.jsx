import { bool, func } from 'prop-types';
import React from 'react';

const UserEntryButton = ({ display, userEntryBtnAction }) => {
  const contents = display
    ? (
      <button type="button" className="btn btn-primary" data-test="user-entry-button" onClick={userEntryBtnAction}>
        Click to enter your value
      </button>
    )
    : <div data-test="user-entry-button" />;
  return (
    <div data-test="component-user-entry-button">
      {contents}
    </div>
  );
};
UserEntryButton.propTypes = {
  display: bool,
  userEntryBtnAction: func,
};
UserEntryButton.defaultProps = {
  display: true,
  userEntryBtnAction: () => { },
};

export default UserEntryButton;
