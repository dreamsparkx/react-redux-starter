import React, { useReducer, Dispatch as DispatchType } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { bindActionCreators, Dispatch } from "redux";
import { State as RootState } from '../../reducers';
import { RouterState } from 'connected-react-router';
import { State, Action } from '../../types/containers/hello';
import { changeCounter } from '../../actions/helloActions';
import { HelloState, ActionType as HelloActionType } from '../../types/store/hello';

/**
 * @tutorial https://blog.bitsrc.io/writing-your-own-custom-hooks-4fbcf77e112e
 */

const initialState: State = { count: 0 };

function hookReducer(state: State, action: Action): State{
    switch (action.type) {
        case 'increment':
            return {
                count: state.count + 1
            };
        case 'decrement':
            return {
                count: state.count - 1
            };
        default:
            throw new Error();
    }
}

function Hello(props: Props){
    const [ internalState, dispatchState ]: [State, DispatchType<Action>] = useReducer(hookReducer, initialState);
    const { count } = internalState;
    const { hello: { counter } } = props;
    return(
        <>
            <h1>Hook state</h1>
            <span data-testid={'hook-state'}>count: {count}</span>
            <button data-testid={'hook-state-increment-btn'} onClick={() => {dispatchState({ type: 'increment' })}}>+</button>
            <button data-testid={'hook-state-decrement-btn'} onClick={() => {dispatchState({ type: 'decrement' })}}>-</button>
            <h1>Redux State</h1>
            <span data-testid={'redux-state'}>count: {counter}</span>
            <button data-testid={'redux-state-increment-btn'} onClick={() => {props.actions.changeCounter(HelloActionType.increment)}}>+</button>
            <button data-testid={'redux-state-decrement-btn'} onClick={() => {props.actions.changeCounter(HelloActionType.decrement)}}>-</button>
        </>
    );
}

interface ReduxActions {
    changeCounter: (actionType: HelloActionType) => void;
}

interface Props extends RouteComponentProps{
    router: RouterState;
    hello: HelloState;
    actions: ReduxActions;
}

function mapStateToProps(state: RootState){
    return {
        router: state.router,
        hello: state.hello
    };
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        actions: bindActionCreators({
            changeCounter
        }, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Hello);