/* eslint-disable no-useless-constructor */
/* eslint-disable react/destructuring-assignment */
import React, { createRef } from 'react';
import { func } from 'prop-types';

class UserEntry extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputRef = createRef(); // useRef()
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.formAction(this.inputRef.current.value);
  }

  render() {
    return (
      <div data-test="component-User-Input-SSW" className="mb-5 ml-3">
        <h1 data-test="instruction-User-Input-SSW">Enter Secret word for User to guess</h1>
        <form name="user-secret-word" data-test="form-User-Input-SSW" className="form-horizontal">
          <input
            type="text"
            data-test="Input-Text-User-Input-SSW"
            ref={this.inputRef}
            className="mb-2 mx-sm-3"
          />
          <button
            type="submit"
            data-test="Submit-Btn-User-Input-SSW"
            className="btn-primary"
            onClick={(e) => this.handleSubmit(e)}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

UserEntry.propTypes = {
  formAction: func.isRequired,
};

export default UserEntry;

/**
 * const UserEntry = () => {
 *  const inputRef = useRef();
 *  const handleSubmit = (event) => {
      event.preventDefault();
      this.props.formAction(this.inputRef.current);
    }
 *  return (
      <div data-test="component-User-Input-SSW" className="mb-5 ml-3">
        <h1 data-test="instruction-User-Input-SSW">Enter Secret word for User to guess</h1>
        <form name="user-secret-word" data-test="form-User-Input-SSW" className="form-horizontal">
          <input
            type="text"
            data-test="Input-Text-User-Input-SSW"
            ref={inputRef}
            className="mb-2 mx-sm-3"
          />
          <button
            type="submit"
            data-test="Submit-Btn-User-Input-SSW"
            className="btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
 */
