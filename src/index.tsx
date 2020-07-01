import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './theme/ThemeProvider';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider>
            <BrowserRouter > { /* place ConnectedRouter under Provider */ }
                <Routes/>
            </BrowserRouter>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

