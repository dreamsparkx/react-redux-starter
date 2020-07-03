import { initialState as helloInitialState } from '../hello';
import { State as RootState } from '../index';

const reducerInitialState: Partial<RootState> = {
    hello: helloInitialState,
};

export default reducerInitialState;
