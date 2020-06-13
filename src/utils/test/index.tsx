import React, {ReactNode} from 'react';
import { createLocation, createMemoryHistory } from 'history';
import { match as routerMatch , Router} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore, { history } from '../../configureStore';
import { State as RootState } from '../../reducers';
import reducerInitialState from '../../reducers/initialStates';

interface RenderOptions {
    initialState?: Partial<RootState>;
    renderOptions?: {
        [key:string]: any
    }
}

function render(ui: React.ReactElement, renderOptions: RenderOptions) {
    const initialState = renderOptions.initialState ? renderOptions.initialState : reducerInitialState;
    const store = configureStore(initialState);
    function Wrapper( { children }: { children?: ReactNode } ) {
        return <Provider store={store}>
            <ConnectedRouter history={history}>
                {children}
            </ConnectedRouter>
        </Provider>;
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions.renderOptions });
}

type MatchParameter<Params> = { [K in keyof Params]?: string };

export const routerTestProps = <Params extends MatchParameter<Params> = {}>
(path: string, params: Params, extendMatch: Partial<routerMatch<any>> = {}) => {
    const match: routerMatch<Params> = Object.assign({}, {
        isExact: false,
        path,
        url: generateUrl(path, params),
        params
    }, extendMatch);
    const history = createMemoryHistory();
    const location = createLocation(match.url);

    return { history, location, match };
};


const generateUrl = <Params extends MatchParameter<Params>>
(path: string, params: Params): string => {
    let tempPath = path;

    for (const param in params) {
        if (params.hasOwnProperty(param)) {
            const value = params[param];
            tempPath = tempPath.replace(
                `:${param}`, value as NonNullable<typeof value>
            );
        }
    }

    return tempPath;
};

export * from '@testing-library/react';

export { render };