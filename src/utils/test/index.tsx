import React, {ReactNode} from 'react';
import { createMemoryHistory, parsePath } from 'history';
import resolvePathname from 'resolve-pathname';
import { match as routerMatch} from 'react-router-dom';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from '../../configureStore';
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
            {children}
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

function createLocation(path: any, state?: any, key?: any, currentLocation?: any) {
    let location: any;
    if (typeof path === 'string') {
        // Two-arg form: push(path, state)
        location = parsePath(path);
        location.state = state;
    } else {
        // One-arg form: push(location)
        location = { ...path };

        if (location.pathname === undefined) location.pathname = '';

        if (location.search) {
            if (location.search.charAt(0) !== '?')
                location.search = '?' + location.search;
        } else {
            location.search = '';
        }

        if (location.hash) {
            if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
        } else {
            location.hash = '';
        }

        if (state !== undefined && location.state === undefined)
            location.state = state;
    }

    try {
        location.pathname = decodeURI(location.pathname);
    } catch (e) {
        if (e instanceof URIError) {
            throw new URIError(
                'Pathname "' +
                location.pathname +
                '" could not be decoded. ' +
                'This is likely caused by an invalid percent-encoding.'
            );
        } else {
            throw e;
        }
    }

    if (key) location.key = key;

    if (currentLocation) {
        // Resolve incomplete/relative pathname relative to current location.
        if (!location.pathname) {
            location.pathname = currentLocation.pathname;
        } else if (location.pathname.charAt(0) !== '/') {
            location.pathname = resolvePathname(
                location.pathname,
                currentLocation.pathname
            );
        }
    } else {
        // When there is no prior location and pathname is empty, set it to /
        if (!location.pathname) {
            location.pathname = '/';
        }
    }

    return location;
}