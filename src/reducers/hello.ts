import { HelloState, Action } from '../types/store/hello';

const initialState: HelloState = {
    counter: 0,
};

export function helloReducer( state = initialState, actions: Action ): HelloState {
    switch (actions.type) {
        case "increment":
            return {
                counter: state.counter + 1
            };
        case "decrement":
            return {
                counter: state.counter - 1
            };
        default:
            return state;
    }
}