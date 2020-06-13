import React from 'react';
import RootRoutes from './index';
import { render } from '../utils/test';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

/**
 * @tutorial https://testing-library.com/docs/example-react-router
 */

test('test routes', () => {
    const history = createMemoryHistory();
    const { container } = render(<Router history={history}>
        <RootRoutes/>
    </Router>, {});
    expect(container.innerHTML).toMatch('Hook state');
    history.push('/miss');
    expect(container.innerHTML).toMatch('Miss');
});