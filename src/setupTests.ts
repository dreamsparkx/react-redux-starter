// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

//https://medium.com/@antonybudianto/react-router-testing-with-jest-and-enzyme-17294fefd303
//https://medium.com/better-programming/how-to-setup-continuous-integration-ci-with-react-circleci-and-github-e0efd5040b03
