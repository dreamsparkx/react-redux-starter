import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './theme/ThemeProvider';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
