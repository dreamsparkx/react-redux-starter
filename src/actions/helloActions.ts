import { State } from '../reducers';
import {Action as ReduxAction, ActionCreator, Dispatch} from 'redux';
import {Action, ActionType} from '../types/store/hello';
import {ThunkAction} from "redux-thunk";

const changeCounterAction: ActionCreator<Action> = (actionType: ActionType) => {
    return {
        type: actionType
    };
};

export const changeCounter: ActionCreator<ThunkAction<Action, State, unknown, ReduxAction<string>>> = (
    actionType: ActionType,
) => {
    return (dispatch: Dispatch<Action>, getState: () => State): Action => {
        return dispatch(changeCounterAction(actionType));
    };
};