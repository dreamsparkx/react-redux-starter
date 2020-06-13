import React from 'react';
import RootRoutes from './index';
import { render } from '../utils/test';
import { createMemoryHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';

/**
 * @tutorial https://testing-library.com/docs/example-react-router
 */

test('test routes', () => {
    const history = createMemoryHistory();
    const { container } = render(<ConnectedRouter history={history}>
        <RootRoutes/>
    </ConnectedRouter>, {});
    expect(container.innerHTML).toMatch('Hook state');
    history.push('/miss');
    expect(container.innerHTML).toMatch('Miss');
});