import { State } from '../reducers';
import { Dispatch } from 'redux';
import { ActionType } from '../types/store/hello';

export function changeCounter(actionType: ActionType) {
  return function (dispatch: Dispatch, getState: () => State) {
    return dispatch({
      type: actionType,
    });
  };
}
