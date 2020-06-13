import {Action, ActionType, HelloState} from '../types/store/hello';

export const initialState: HelloState = {
    counter: 0,
};

export function helloReducer( state = initialState, actions: Action ): HelloState {
    switch (actions.type) {
        case ActionType.increment:
            return {
                counter: state.counter + 1
            };
        case ActionType.decrement:
            return {
                counter: state.counter - 1
            };
        default:
            return state;
    }
}