import { combineReducers } from 'redux';
import { HelloState } from '../types/store/hello';
import { helloReducer } from './hello';

const rootReducer = () =>
  combineReducers({
    hello: helloReducer,
  });

export interface State {
  hello: HelloState;
}

export default rootReducer;
