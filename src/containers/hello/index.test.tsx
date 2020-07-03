import React from 'react';
import Container from './index';
import { render, screen, fireEvent, routerTestProps } from '../../utils/test';

test('render with redux with default', () => {
    const { history, location, match } = routerTestProps('/', {});
    render(<Container history={history} location={location} match={match} />, {});
    expect(screen.getByTestId('hook-state')).toHaveTextContent('count: 0');
    fireEvent.click(screen.getByTestId('hook-state-increment-btn'));
    expect(screen.getByTestId('hook-state')).toHaveTextContent('count: 1');
    fireEvent.click(screen.getByTestId('hook-state-decrement-btn'));
    expect(screen.getByTestId('hook-state')).toHaveTextContent('count: 0');
    expect(screen.getByTestId('redux-state')).toHaveTextContent('count: 0');
    fireEvent.click(screen.getByTestId('redux-state-increment-btn'));
    expect(screen.getByTestId('redux-state')).toHaveTextContent('count: 1');
    fireEvent.click(screen.getByTestId('redux-state-decrement-btn'));
    expect(screen.getByTestId('redux-state')).toHaveTextContent('count: 0');
});

test('render with redux with custom initial state', () => {
    const { history, location, match } = routerTestProps('/', {});
    render(<Container history={history} location={location} match={match} />, {
        initialState: {
            hello: {
                counter: 1,
            },
        },
    });
    expect(screen.getByTestId('hook-state')).toHaveTextContent('count: 0');
    fireEvent.click(screen.getByTestId('hook-state-increment-btn'));
    expect(screen.getByTestId('hook-state')).toHaveTextContent('count: 1');
    fireEvent.click(screen.getByTestId('hook-state-decrement-btn'));
    expect(screen.getByTestId('hook-state')).toHaveTextContent('count: 0');
    expect(screen.getByTestId('redux-state')).toHaveTextContent('count: 1');
    fireEvent.click(screen.getByTestId('redux-state-increment-btn'));
    expect(screen.getByTestId('redux-state')).toHaveTextContent('count: 2');
    fireEvent.click(screen.getByTestId('redux-state-decrement-btn'));
    expect(screen.getByTestId('redux-state')).toHaveTextContent('count: 1');
});
