import { combineReducers } from 'redux';
import { History } from 'history';
import { RouterState, connectRouter } from 'connected-react-router';
import { HelloState } from '../types/store/hello';
import { helloReducer } from './hello';

const rootReducer = (history: History)=> combineReducers({
    router: connectRouter(history),
    hello: helloReducer
});

export interface State {
    router: RouterState;
    hello: HelloState;
}

export default rootReducer
