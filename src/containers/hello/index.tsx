import React, { useReducer, Dispatch as DispatchType, useContext } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { bindActionCreators, Dispatch } from "redux";
import { State as RootState } from '../../reducers';
import { State, Action } from '../../types/containers/hello';
import { changeCounter } from '../../actions/helloActions';
import { HelloState, ActionType as HelloActionType } from '../../types/store/hello';
import Button from '../../components/Button';
import { ThemeContext } from '../../theme/ThemeProvider';

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
    const { toggleTheme } = useContext(ThemeContext);
    const { count } = internalState;
    const { hello: { counter } } = props;
    return(
        <>
            <h1>Hook state</h1>
            <span data-testid={'hook-state'}>count: {count}</span>
            <Button text={'+'} data-testid={'hook-state-increment-btn'} onClick={() => {dispatchState({ type: 'increment' })}}/>
            <Button text={'-'} data-testid={'hook-state-decrement-btn'} onClick={() => {dispatchState({ type: 'decrement' })}}/>
            <h1>Redux State</h1>
            <span data-testid={'redux-state'}>count: {counter}</span>
            <Button text={'+'} data-testid={'redux-state-increment-btn'} onClick={() => {props.actions.changeCounter(HelloActionType.increment)}}/>
            <Button text={'-'} data-testid={'redux-state-decrement-btn'} onClick={() => {props.actions.changeCounter(HelloActionType.decrement)}}/>
            <br/><Button text={'change theme'} onClick={toggleTheme}/>
        </>
    );
}

interface ReduxActions {
    changeCounter: (actionType: HelloActionType) => void;
}

interface Props extends RouteComponentProps{
    hello: HelloState;
    actions: ReduxActions;
}

function mapStateToProps(state: RootState){
    return {
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