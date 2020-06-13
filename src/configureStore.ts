import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer, { State as RootState } from './reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export const history = createBrowserHistory();

export default function configureStore(preLoadedState?: Partial<RootState>) {
    return createStore(
        createRootReducer(history), // root reducer with router state
        preLoadedState,
        compose(
            applyMiddleware(
                routerMiddleware(history), // for dispatching history actions
                thunk,
                // ... other middlewares ...
            ),
            composeWithDevTools({ trace: true })()
        ),
    );
}
