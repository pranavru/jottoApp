/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  // Disable LifeCycle Methods: It only allows them to run when they are explicitely called.
  // Such that, it prevents running of methods like componentDidMount(), componentDidUpdate()
  //   from running when the ShallowWrapper{} is called.
  disableLifecycleMethods: true,
  adapter: new Adapter(),
});
