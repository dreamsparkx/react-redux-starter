import { applyMiddleware, compose, createStore } from 'redux';
import createRootReducer, { State as RootState } from './reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(preLoadedState?: Partial<RootState>) {
    return createStore(
        createRootReducer(), // root reducer with router state
        preLoadedState,
        compose(
            applyMiddleware(
                thunk,
                // ... other middlewares ...
            ),
            composeWithDevTools({ trace: true })()
        ),
    );
}
